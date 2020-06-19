import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
//import layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return(
        <div>
            <Header />
            <section class="hero">
            <div class="hero-body">
            <div class="container">
            <div class="content">
            {props.children}
            </div>
            </div>
            </div>
            </section>
            <Footer />
        </div>
    );
}

export default Layout;