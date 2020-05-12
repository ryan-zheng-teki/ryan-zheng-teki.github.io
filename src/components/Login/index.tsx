import React from 'react';
import { Overlay, OverlayContextInterface } from '../Overlay';
import { GithubLogin } from './Github';

const Login: React.FC<{ overlay: OverlayContextInterface }> = ({ overlay }) => {
  return (
    <Overlay context={overlay}>
      <GithubLogin />
    </Overlay>
  );
};

export default Login;
