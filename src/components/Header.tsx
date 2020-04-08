import React from 'react';
import { Link } from "react-router-dom";
import logo from 'Assets/logo.svg';
export function Header() {

    return (
        <div className="header">
            <img className='logo' src={logo} />
            <ul className="category">
                <li>
                    <Link to="/blogs">
                       Blogs
                    </Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
            </ul>
        </div>
    )
}


