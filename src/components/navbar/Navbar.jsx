import { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import navIcon1 from '../img/nav-icon1.svg';
import navIcon2 from '../img/nav-icon2.svg';
import navIcon3 from '../img/nav-icon3.svg';
import "./Navbar.scss";
import Sidebar from "../sidebar/Sidebar";

export const Navbar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="sidebar" ><Sidebar/></div>
          <a className="navbar-brand" href="/">
             <div className="logo">
              Abhay
             </div>
          </a>
          <button style={{display:"none"}} className="navbar-toggler" aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" id="basic-navbar-nav">
            <ul className="nav">
              <li className="nav-item">
                <HashLink to="#Homepage" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#Services" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Services</HashLink>
              </li>
              <li className="nav-item">
                <HashLink to="#Portfolio" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</HashLink>
              </li>
            </ul>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/abhay-rawat-b58b2226b/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Known-user"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/abhayrawat55/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#Contact'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </div>
        </div>
      </nav>
    </Router>
  )
}
