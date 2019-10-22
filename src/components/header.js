import React from 'react';
import headshot from '../images/mikebell-square.jpg';
import headerStyles from '../styles/header.module.css';

const { header, image, name, title, formerTitle } = headerStyles;

const Header = () => (
    <header className={header}>
        <img src={headshot} className={image} alt="Portrait of Mike Bell" />
        <div>
            <h1 className={name}>Mike Bell</h1>
            <h2 className={title}>
                Frontend Developer <span className={formerTitle}>(Former Designer)</span>
            </h2>
        </div>
    </header>
);

export default Header;