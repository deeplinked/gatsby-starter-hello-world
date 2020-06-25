import React from 'react'
import { Link } from 'gatsby'
import logo from "../../static/logo.png"
import { FaTwitter, FaFacebookF } from 'react-icons/fa';

const Navbar = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        active: false,
        navBarActiveClass: '',
      }
    }
  
    toggleHamburger = () => {
      // toggle the active boolean in the state
      this.setState(
        {
          active: !this.state.active,
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.active
            ? this.setState({
                navBarActiveClass: 'is-active',
              })
            : this.setState({
                navBarActiveClass: '',
              })
        }
      )
    }
  
    render() {
      return (
        <nav
          className="navbar has-shadow"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
            <Link className="navbar-item has-tooltip-bottom" to="/" data-tooltip="Home">
            <img src={logo} alt="Logo" />
            </Link>
              {/* Hamburger menu */}
              <a
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start">
                <Link activeClassName="is-active has-text-black has-background-light" className="navbar-item has-text-weight-normal" to="/gate">GATE</Link>
                <Link activeClassName="is-active has-text-black has-background-light" className="navbar-item has-text-weight-normal" to="/psu">PSUs</Link>
                <Link activeClassName="is-active has-text-black has-background-light" className="navbar-item has-text-weight-normal" to="/crt">CRT</Link>
              </div>
              <div className="navbar-end">
                <Link activeClassName="is-active has-text-black has-background-light" className="navbar-item has-text-weight-light" to="/blog">News</Link>
                <Link activeClassName="is-active has-text-black has-background-light" className="navbar-item has-text-weight-light" to="/contact">Contact</Link>
                <Link activeClassName="is-active has-background-light" className="navbar-item has-text-danger has-text-weight-normal" to="/enroll">Enroll</Link>
                <div className="field is-grouped">
                <a className="navbar-item has-tooltip-bottom" data-tooltip="Twitter" href="https://twitter.com" target="_blank"><span className="icon"><FaTwitter size="1em"/></span></a>
                <a className="navbar-item has-tooltip-bottom" data-tooltip="Facebook" href="https://facebook.com" target="_blank"><span className="icon"><FaFacebookF size="1em"/></span></a>
                </div>
            </div>
            </div>
          </div>
        </nav>
      )
    }
  }
  
  export default Navbar