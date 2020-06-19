import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
    return(
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">KiKi</Link>
            </h1>
            <ul className={headerStyles.navList}>
                <li>
                    <Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/">home</Link>
                </li>
                <li>
                    <Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/about">about</Link>
                </li>
                <li>
                    <Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/blog">blog</Link>
                </li>
                <li>
                    <Link activeClassName={headerStyles.activeNavItem} className={headerStyles.navItem} to="/contact">contact</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;