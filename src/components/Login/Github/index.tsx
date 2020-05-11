import React from 'react';
import { makeRandomString, toQuery } from 'src/core/tsUtils';

const GITHUB_API_URL = process.env.GITHUB_API_URL;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUrl = 'localhost:3000/callback';

export const GithubLogin: React.FC = () => {
  let onClickHandler = () => {
    let query = toQuery({
      clientId,
      clientSecret,
      redirectUrl,
      state: makeRandomString(20),
    });
    window.location.href = GITHUB_API_URL + `${query}`;
  };

  return (
    <button
      className="github_login"
      type="button"
      onClick={() => onClickHandler()}
    >
      <img src={GithubIcon}> Gith Hub Image</img>
    </button>
  );
};
