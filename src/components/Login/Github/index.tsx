import React from 'react';
import { makeRandomString, toQuery } from '../../../core/tsUtils';
import GithubIcon from './GitHub-Mark-32px.png';

const { GITHUB_API_URL } = process.env;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUrl = 'localhost:3000/callback';

export const GithubLogin: React.FC = () => {
  const onClickHandler = () => {
    const query = toQuery({
      clientId,
      clientSecret,
      redirectUrl,
      state: makeRandomString(20),
    });
    window.location.href = `${GITHUB_API_URL}${query}`;
  };

  return (
    <button
      className="github_login"
      type="button"
      onClick={() => onClickHandler()}
    >
      <img src={GithubIcon} alt="github icon" />
    </button>
  );
};
