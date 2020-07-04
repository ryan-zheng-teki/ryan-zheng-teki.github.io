import { useApolloClient } from '@apollo/react-hooks';
import { useSignIn } from '@sdk/mutations';
import { useUserDetails } from '@sdk/queries';
import github from '@sdk/sociallogin/github';
import SocialLogin, { SocialLoginProps } from '@sdk/sociallogin/SocialLogin';
import { getQueryStringValue } from '@sdk/sociallogin/utils';
import { TokenAuthVariables } from 'Generated/TokenAuth';
import React, { useCallback, useEffect, useRef } from 'react';
import { Redirect } from 'react-router';
import { apiUrl } from '../../../constants';
import GithubIcon from './GitHub-Mark-32px.png';

/*
Github Login Steps
(1)Get the code
(2)Use code to get access token
(3)From access token to get user information.
(4)After we have the user information, we should create user in the backend, by sending the user id, we could actually use the access token
as the token for the backend. we also send the login type to backend. When backend sees that it's github type. It verifies the following information.
It checks if we also have accessToken.

(1)On mobile systems, if we use github to login, there will be problems. Because mobile
*/
const GithubButton: React.FC<SocialLoginProps> = (props) => {
  const githubAuthorizationCode = useRef(null);


  const apolloClient = useApolloClient();
  const { data: user } = useUserDetails();
  const [signIn] = useSignIn();
  const getGithubUserInfo = useCallback(() => {
    const getUser = async () => {
      await github.getAccessToken();
      const userInfo = await github.getUserInfo();
      /* Here i need to make a mutation query to send the request to backend.
      The mutation query is createJwtToken
      */
      const tokenAuthParams: TokenAuthVariables = 
      { authInput: 
        { username: userInfo.profile.name,
          usertype: 'GITHUB', userId: userInfo.profile.id,
          avatarUrl: userInfo.profile.profilePicURL 
        } 
      };
      signIn(tokenAuthParams);
      apolloClient.resetStore();
      // can we change the page history to home page.
    };
    getUser();
  }, []);



  const code = getQueryStringValue('code');
  if (code != null && code.length > 0 && githubAuthorizationCode.current == null) {
    githubAuthorizationCode.current = code;
  }

  useEffect(() => {
    if(githubAuthorizationCode.current != null) {
      getGithubUserInfo();
    }
  }, [githubAuthorizationCode.current]);//
  

  const onClickHandler = () => {
    github.authorize();
  };

  if( user ) {
    return <Redirect to="/" />;
  }
  
  return (
    <button className="github__button" type="button" onClick={onClickHandler}>
      <img
        src={GithubIcon}
        alt="github icon"
        className="github__button__icon"
      />
      Sign In With Github
    </button>
  );
};

const client_id = process.env.GITHUB_API_CLIENT_ID;
const SociaLoginGithub = SocialLogin(GithubButton);
const githubProps: SocialLoginProps = {
  appId: client_id,
  gateKeeper: apiUrl,
  autoLogin: false,
  autoCleanUri: false,
  getInstance: () => {
    return '';
  },
  onLoginFailure: () => {
    return '';
  },
  onLoginSuccess: () => {
    return '';
  },
  onLogoutFailure: () => {
    return '';
  },
  onLogoutSuccess: () => {
    return '';
  },
  provider: 'github',
  redirect: 'http://localhost:3000/login',
  scope: 'user',
};

function GithubLogin() {
  return <SociaLoginGithub {...githubProps} />;
}

export default GithubLogin;
