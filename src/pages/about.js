import React from 'react';
import Layout from '../components/layout';


const AboutPage = () => {
    return(
            <Layout>
            <h1>About us.</h1>
            <p>nothing much, actually nothing at all.</p>
            <div class="tabs">
            <ul>
                <li class="is-active"><a>Pictures</a></li>
                <li><a>Music</a></li>
                <li><a>Videos</a></li>
                <li><a>Documents</a></li>
            </ul>
            </div>
            </Layout>

    );
}
export default AboutPage;