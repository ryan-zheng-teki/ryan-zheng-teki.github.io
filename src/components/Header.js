import React from 'react';
import '../styles/components/_index.scss';

export function Header() {
    const categories = ['Tech', 'Life', 'About me'];
    return (
        <div className="header">
            <p className="logo">My Tech Life</p>
            <ul className="category">
                {categories.map((value, index) => {
                return <a key={index}>{value}</a>
                })}
            </ul>
        </div>
    )
}