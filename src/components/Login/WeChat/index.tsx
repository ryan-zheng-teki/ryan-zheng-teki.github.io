import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import WeChatIcon from './wechat-logo-preview.png';

export const WeChatLogin: React.FC<RouteComponentProps<{}>> = () => {
  return (
    <button className="wechat__button" type="button">
      <img
        src={WeChatIcon}
        alt="wechat icon"
        className="wechat__button__icon"
      />
      Sign In With WeChat
    </button>
  );
};

export default WeChatLogin;
