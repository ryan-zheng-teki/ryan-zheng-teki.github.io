import React from 'react';
import { makeRandomString, toQuery } from '../../../core/tsUtils';
import GithubIcon from './GitHub-Mark-32px.png';

const { GITHUB_API_URL } = process.env;
const client_id = process.env.GITHUB_API_CLIENT_ID;

export const GithubLogin: React.FC = () => {
  const onClickHandler = () => {
    const query = toQuery({
      client_id,
      state: makeRandomString(20),
    });
    window.location.href = `${GITHUB_API_URL}?${query}`;
  };

  return (
    <button
      className="github_login"
      type="button"
      onClick={() => onClickHandler()}
    >
      <img src={GithubIcon} alt="github icon" />
      Sign In With Github
    </button>
  );
};
