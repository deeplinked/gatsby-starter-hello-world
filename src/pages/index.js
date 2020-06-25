import React from "react";
import Layout from '../components/layout';
import Hero from '../components/hero';
import Blogroll from '../components/blogroll'


const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <section class="section">
        <div class="container content">
        <Blogroll />
        </div>
      </section>
      
    </Layout>
  );
  
}
export default IndexPage;