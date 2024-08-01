import aboutPicture from '../../assets/about.webp'
import '../../styles/About.css'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { faEnvelope,faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

gsap.registerPlugin(ScrollTrigger);


const About = () => {

    const aboutTextRef = useRef(null);
    const aboutPictureRef = useRef(null)

    const animateAbout = () => {
        const aboutTextElements = aboutTextRef.current.querySelectorAll('li')
 
        gsap.fromTo(aboutTextElements,{autoAlpha: 0, x: 100, duration: 1.5}, {autoAlpha: 1, x: 0, duration: 2, stagger: 0.2, scrollTrigger: {
            trigger: aboutTextElements,
            start: "top 87%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        }})
        gsap.fromTo(aboutPictureRef.current,{autoAlpha: 0, x: -100},{autoAlpha: 1, x: 0, duration: 2, scrollTrigger: {
            trigger: aboutPictureRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }}, 0)
    }

    useGSAP(() => {
        animateAbout();
    }, [])

    return (
    <section className="about-section">
        <div className="about-picture-section" ref={aboutPictureRef}>
            <img src={aboutPicture} alt="" className="about-picture" />
            <ul className="about-content">
                <li className="about-content-title">Come and visit us</li>
                <li className="about-content-phone about-contact"><span className='about-icon'><FontAwesomeIcon icon={faPhone} /></span>+234 706 6100 601</li>
                <li className="about-content-mail about-contact"><span className='about-icon'><FontAwesomeIcon icon={faEnvelope} /></span>alibelloimoukhuede@gmail.com</li>
                <li className="about-content-location about-contact"><span className='about-icon'><FontAwesomeIcon icon={faLocationDot} /></span>Yankaba Quarters</li>
            </ul>
        </div>
        <ul className="about-details-section" ref={aboutTextRef}>
            <li className="about-title">We provide healthy <br />food for your family</li>
            <li className="about-description-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos veniam aliquid autem sequi voluptatibus expedita impedit omnis quisquam doloribus.</li>
            <li className="about-description-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, corrupti aliquid harum expedita unde autem.</li>
            <li className="more-about-us">More About Us</li>
        </ul>
    </section>

)};

export default About;