import React from 'react';
import Tux from 'Assets/Tux.svg';

export function Footer(){
    return (
        <div className="footer">
            <img className='footer__tux' src={ Tux } />
        </div>
    )
}

