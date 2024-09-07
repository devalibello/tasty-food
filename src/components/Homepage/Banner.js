import '../../styles/Banner.css';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';



const Banner = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const btnRef = useRef(null);

    const animateBanner = () => {
        const btnRefItems = btnRef.current.querySelectorAll('li');
        const TL = gsap.timeline()
        TL
        .fromTo(titleRef.current, {autoAlpha: 0, y: -50, delay: 1}, {autoAlpha: 1, y: 0, duration: 1, delay: 1})
        .fromTo(descriptionRef.current, {autoAlpha: 0, y: -50}, {autoAlpha: 1, y: 0, duration: 1}, '-=0.6')
        .fromTo(btnRefItems, {autoAlpha: 0, y:-50}, {autoAlpha: 1, y: 0, duration: 1}, '-=0.6')
    }

    useGSAP(() => {
        animateBanner()
    })
    
    return (
    <section className="banner-section">
        <div className="banner-title" ref={titleRef}>Best food for <br />your taste</div>
        <div className="banner-description" ref={descriptionRef}>Indulge in a culinary experience like no other <br /> Our dishes are crafted with the finest ingredients. </div>
        <ul className="banner-cta-section" ref={btnRef}>
            <li className="banner-cta-1">Book A Table</li>
            <li className="banner-cta-2">Explore menu</li>
        </ul>
    </section>
)};

export default Banner;