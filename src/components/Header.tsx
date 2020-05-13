import logo from 'Assets/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { OverlayContext, OverlayTheme, OverlayType } from './Overlay';

export function Header() {
  return (
    <OverlayContext.Consumer>
      {
        (overlayObject) => {
          return (
            <div className="header">
              <a href="/"><img className="logo" src={logo} alt="logo" /></a>
              <ul className="header__right">
                <li onClick={() => {
                  overlayObject.show(
                    OverlayType.login,
                    OverlayTheme.modal
                  );
                }}
                >Sign In
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
            </div>);
        } 
      }
      
    </OverlayContext.Consumer>
  );
}
