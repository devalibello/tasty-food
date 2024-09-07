import React, { useState } from 'react';
import '../../styles/Navbar.css';
import companyLogo from '../../assets/japanese-food.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons
import { faXTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
// import gsap from 'gsap';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        if (!menuOpen) {
            document.body.classList.add('scroll')
        } else {
            document.body.classList.remove('scroll')
        }
    };

    // const logoRef = useRef(null);
    // const bookTableRef = useRef(null);
    // const navLinksRef = useRef(null);

    // const animateNavbar = () => {
    //     const navLinks = gsap.utils.toArray(navLinksRef.current.querySelectorAll('li'));

    //     const TL = gsap.timeline();
    //     TL
    //     .fromTo(logoRef.current, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, duration: 1.5 })
    //     .fromTo(bookTableRef.current, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, duration: 1.5 }, 0)
    //     .fromTo(navLinks, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.2}, '-=0.2')
    //     .fromTo(navLinksRef.current, { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0)

    // };

    // useEffect(() => {
    //     animateNavbar();
    // }, []);

    return (
        <section className="nav-section">
            <div className="upper-nav">
                <ul className="contact-section">
                    <span className="contact-list">
                        <li className="phone">
                            <span><FontAwesomeIcon icon={faPhone} /></span> +2347066100601
                        </li>
                        <li className="mail">
                            <span><FontAwesomeIcon icon={faEnvelope} /></span> alibelloimoukhuede@gmail.com
                        </li>
                    </span>
                    <span className="social-list">
                        <li className="social"><FontAwesomeIcon icon={faXTwitter} className='social-icons' /></li>
                        <li className="social"><FontAwesomeIcon icon={faFacebookF} className='social-icons' /></li>
                        <li className="social"><FontAwesomeIcon icon={faInstagram} className='social-icons' /></li>
                        <li className="social"><FontAwesomeIcon icon={faGithub} className='social-icons' /></li>
                    </span>
                </ul>
            </div>
            <div className="menu-section">
                <div className="logo-section">
                    <img src={companyLogo} alt="japanese-food-logo" className="company-logo" />
                    <div className="company-name">Arewa Specials</div>
                </div>
                <div className={`menu-list ${menuOpen ? 'open' : ''}`}>
                    <ul className='menu-items'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </div>
                <div className={`book-a-table ${menuOpen ? 'open' : ''}`}>
                    Book A Table
                </div>
            </div>
        </section>
    );
};

export default Navbar;
