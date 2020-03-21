import React from 'react';
import { Link } from "react-router-dom";

export function Header() {

    return (
        <div className="header">
            <p className="logo">My Tech Life</p>
            <ul className="category">
                <li>
                    <Link to="/">Life</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
            </ul>
        </div>
    )
}