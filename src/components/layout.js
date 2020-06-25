import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import Footer from './footer';
import useSiteMetadata from './SiteMetadata'
import '../styles/index.scss';

const Layout = (props) => {
    const { title, description } = useSiteMetadata()
    return(
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="theme-color" content="#fff" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
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