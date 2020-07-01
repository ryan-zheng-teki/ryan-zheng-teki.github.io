import { useUserDetails } from '@sdk/queries';
import logo from 'Assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { OverlayContext } from '../Overlay';

export function Header() {
  const { data: user } = useUserDetails();
  return (
    <OverlayContext.Consumer>
      {(overlayObject) => {
        return (
          <div className="header">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <ul className="header__right">
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/create" className="header__right__newblog">
                  Create Blog
                </Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
            </ul>
          </div>
        );
      }}
    </OverlayContext.Consumer>
  );
}
