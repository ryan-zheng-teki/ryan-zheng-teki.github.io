import uuid from 'uuid5';
import { getQueryStringValue, rslError } from './utils';

const GITHUB_API = 'https://api.github.com/graphql';
const AUTH_URL = 'https://github.com/login/oauth/authorize';
const TOKEN_URL = 'https://github.com/login/oauth/access_token';
const CLIENT_SECRET = process.env.GITHUB_API_CLIENT_SECRET;

let oauth = false;
let githubAccessToken: string;
let githubAppId: string;
let githubAuth: string;
let gatekeeperURL: string;

/**
The steps used for authenticating through github
(1)window.open to rediret to github authentication page
(2)check the code it sent back by github
(3)if there is code ,then use the code to get the access token
(4)store the access token into local storage
(5)use the access token to fetch user information
(6)send the login steps to backend using the user id.
 */
/**
 * When github page is loaded in the same browser, promise will not work.
 * @param {string} appId
 * @param {string} redirect
 * @param {array|string} scope
 */
const init = ({
  appId,
  gateKeeper,
  redirect,
  scope,
}: {
  appId: string;
  gateKeeper: string;
  redirect: string;
  scope: string;
}) => {
  return new Promise((resolve, reject) => {
    githubAppId = appId;
    oauth = true;
    gatekeeperURL = gateKeeper;

    const githubScopes: string[] = scope.split(',');
    const requestedScopes = githubScopes
      .reduce((acc: Array<string>, item) => {
        if (typeof item === 'string' && acc.indexOf(item) === -1) {
          acc.push(item.trim());
        }
        return acc;
      }, [])
      .join('%20');

    githubAuth = `http://github.com/login/oauth/authorize?client_id=${githubAppId}&scope=${requestedScopes}&state=${uuid(
      redirect,
      uuid.URL
    )}`;
    return resolve();
  });
};

/**
 * Two steps to get the user info. Currently the access token is stored as local variable
 * we have to store it in the local storage.
 * (1)accessToken is not empty
 * (2)use accessToken to send a query to github
 * @see https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps/#redirect-urls
 */
const getUserInfo = async () => {
  if (!githubAccessToken && oauth) {
    return Promise.reject(
      rslError({
        provider: 'github',
        type: 'access_token',
        description: 'No access token available',
        error: null,
      })
    );
  }

  try {
    const response = await window.fetch(GITHUB_API, {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${githubAccessToken || githubAppId}`,
      }),
      body: JSON.stringify({
        query: 'query { viewer { login, name, email, avatarUrl(size:25), id } }',
      }),
    });
    const json = await response.json();
    if (json.message || json.errors) {
      return Promise.reject(
        rslError({
          provider: 'github',
          type: 'check_login',
          description: 'Failed to fetch user data',
          error: json,
        })
      );
    }
    return generateUser(json);
  } catch (error) {
    return Promise.reject(
      rslError({
        provider: 'github',
        type: 'check_login',
        description: 'Failed to fetch user data due to window.fetch() error',
        error: null,
      })
    );
  }
};

/**
 * authorize the user access. for github authenticate, the code is sent back through
 * redirect url. So it's handled by parent component
 */
const authorize = () => {
  window.open(githubAuth, '_self');
};

/**
 * Fake GitHub logout always throwing error.
 */
const logout = () =>
  new Promise((resolve, reject) =>
    reject(
      rslError({
        provider: 'github',
        type: 'logout',
        description: 'Cannot logout from github provider',
        error: null,
      })
    )
  );

/**
 * Get access token with authorization code
 * @see https://github.com/prose/gatekeeper
 * @see https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-authorization-options-for-oauth-apps
 */

type GithubToken = {
  access_token: string;
  token_type: string;
  scope: string;
};

const getAccessToken = async ():Promise<any> => {
  const authorizationCode = getQueryStringValue('code');
  if (!authorizationCode) {
    return Promise.reject(new Error('Authorization code not found'));
  }
  try {
    const  response = await window.fetch(`${gatekeeperURL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `query { githubToken(code:"${authorizationCode}")}`,
      }),
    });
    const  json = await response.json();
    if (json.error || !json.data.githubToken) {
      return Promise.reject(
        rslError({
          provider: 'github',
          type: 'access_token',
          description: 'Got error from fetch access token',
          error: json,
        })
      );
    }
    const  githubToken: GithubToken = await JSON.parse(json.data.githubToken);
    githubAccessToken = githubToken.access_token;
    return Promise.resolve(null);
  } catch (error) {
    return Promise.reject(
      rslError({
        provider: 'github',
        type: 'access_token',
        description: 'Failed to fetch user data due to window.fetch() error',
        error,
      })
    );
  }
};
/**
 * Helper to generate user account data.
 * @param {Object} viewer
 * @see About token expiration: https://gist.github.com/technoweenie/419219#gistcomment-3232
 */

type GithubUser = {
  data: {
    viewer: {
      id: string;
      login: string;
      name: string;
      avatarUrl: string;
      email: string;
    };
  };
};

const generateUser = ({ data: { viewer } }: GithubUser) => {
  return {
    profile: {
      id: viewer.id,
      name: viewer.login,
      firstName: viewer.name,
      lastName: viewer.name,
      email: viewer.email,
      profilePicURL: viewer.avatarUrl,
    },
    token: {
      accessToken: githubAccessToken || githubAppId,
      expiresAt: Infinity,
    },
  };
};

export default {
  init,
  authorize,
  getAccessToken,
  getUserInfo,
  generateUser,
};
