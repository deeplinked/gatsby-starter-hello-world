import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import Footer from './footer';
import '../styles/index.scss';

const Layout = (props) => {
    return(
        <div>
            <Helmet>
                <html lang="en" />
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Helmet>
            <Navbar />
            <section class="section">
            <div class="container content">
            {props.children}
            </div>
            </section>
            <Footer />
        </div>
    );
}

export default Layout;