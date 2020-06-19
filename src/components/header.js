import React from 'react';
import { Link } from 'gatsby';
//import headerStyles from './header.module.scss';

const Header = () => {
    return(
<header class="container">
<nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
        <Link className="navbar-item" to="/">KiKi</Link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-end">

            <Link activeClassName="is-active" className="navbar-item" to="/">home</Link>

            <Link activeClassName="is-active" className="navbar-item" to="/about">about</Link>

            <Link activeClassName="is-active" className="navbar-item" to="/blog">blog</Link>

            <Link activeClassName="is-active" className="navbar-item" to="/contact">contact</Link>

    </div>
  </div>
</nav>
</header>
    );
}

export default Header;