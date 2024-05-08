import React from 'react';
import '../../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter,faFacebookF,faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => (
<section className="nav-section">
    <div className="upper-nav">
        <ul className="contact-section">
            <span className="contact-list">
                <li className="phone"><span ><FontAwesomeIcon icon={faPhone} /></span> +2347066100601</li>
                <li className="mail"><span ><FontAwesomeIcon icon={faEnvelope} /></span>alibelloimoukhuede@gmail.com</li>
            </span>
            <span className="social-list">
                <li className="social"><FontAwesomeIcon icon={faXTwitter} className='social-icons'/></li>
                <li className="social"><FontAwesomeIcon icon={faFacebookF} className='social-icons'/></li>
                <li className="social"><FontAwesomeIcon icon={faInstagram} className='social-icons'/></li>
                <li className="social"><FontAwesomeIcon icon={faGithub} className='social-icons'/></li>
            </span>                        
        </ul>
    </div>
    <div className="menu-section">
        <span className="logo-section">
            <img src="" alt="" className="company-logo" />
            <div className="company-name">Bistro Bliss</div>
        </span>
        <span className="menu-list">

        </span>
    </div>
</section>
);

export default Navbar;