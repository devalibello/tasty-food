import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter,faFacebookF,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => (
<section className="nav-section">
    <div className="contact-section">
        <ul className="contact-list">
            <li><span className="phone"><FontAwesomeIcon icon={faPhone} /></span> +2347066100601</li>
            <li><span className="mail"><FontAwesomeIcon icon={faEnvelope} /></span>alibelloimoukhuede@gmail.com</li>
        </ul>
        <ul className="social-list">
            <li className="twitter"><FontAwesomeIcon icon={faXTwitter} /></li>
            <li className="facebook"><FontAwesomeIcon icon={faFacebookF} /></li>
            <li className="instagram"><FontAwesomeIcon icon={faInstagram} /></li>
            <li className="github"><FontAwesomeIcon icon={faGithub} /></li>
        </ul>
    </div>
    <div className="menu-section">
        <div className="logo-section"></div>
        <div className="menu-list"></div>
        <div className="book-a-table"></div>
    </div>
</section>
);

export default Navbar;