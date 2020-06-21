import github from '@sdk/sociallogin/github';
import SocialLogin, { SocialLoginProps } from '@sdk/sociallogin/SocialLogin';
import { getQueryStringValue } from '@sdk/sociallogin/utils';
import React, { useEffect } from 'react';
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
  const onClickHandler = () => {
    github.authorize();
  };

  useEffect(() => {
    const code = getQueryStringValue('code');
    if (code != null && code.length > 0) {
      github.getAccessToken().then(() => {
        github.getUserInfo().then((userInfo) => {
          console.log(userInfo);
        });
      });
    }
  });

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
