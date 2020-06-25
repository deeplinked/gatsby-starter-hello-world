import React from 'react';
import { Link } from 'gatsby';
const Hero = () => {
    return(
        <section className="hero is-medium">
        <div className="hero-body has-text-centered">
  
        <h1 className="title is-1"><span className="has-text-weight-medium">Hello! we are</span> <span className="has-text-link">company name</span>.</h1>
        <p className="subtitle is-5">Providing quality and affordable coaching for <strong>PSU</strong>s and <strong>GATE</strong> aspirants @Warangal, Telangana.</p> 
        <p><small>know more <Link to="/about">about us</Link></small></p>
  
        </div>
        </section>
    )
}
export default Hero;