import React from 'react';
import headerStyles from '../styles/header.module.css';

const { name, title, formerTitle } = headerStyles;

const Header = () => (
    <header>
        <h1 className={name}>Mike Bell</h1>
        <h2 className={title}>
            Frontend Developer <span className={formerTitle}>(Former Designer)</span>
        </h2>

    </header>
);

export default Header;