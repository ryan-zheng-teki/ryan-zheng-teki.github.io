import Tux from 'Assets/tux.svg';
import React from 'react';

export function Footer() {
  return (
    <div className="footer">
      <img className="footer__tux" src={Tux} alt="tux" />
    </div>
  );
}
