import React from 'react';
import Tux from 'Assets/tux.svg';

export function Footer() {
  return (
    <div className="footer">
      <img className="footer__tux" src={Tux} alt="tux" />
    </div>
  );
}
