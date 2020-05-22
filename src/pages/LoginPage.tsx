import { GithubLogin } from 'AppComponents';
import React from 'react';

export const LoginPage: React.FC = () => {
  return (
    <div className="page-login">
      <h2>Log In</h2>
      <GithubLogin />
    </div>
  );
};
