import '../../styles/Offer.css'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import cateringsImage from '../../assets/caterings.webp'
import birthdaysImage from '../../assets/birthdays.webp'
import weddingsImage from '../../assets/weddings.webp'
import eventsImage from '../../assets/events.webp'

gsap.registerPlugin(ScrollTrigger)

const offerItems = [
    {
        id: 1,
        image: cateringsImage,
        title: 'Caterings',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis."
    },
    {
        id: 2,
        image: birthdaysImage,
        title: 'Birthdays',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis."
    },
    {
        id: 3,
        image: weddingsImage,
        title: 'Weddings',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis."
    },
    {
        id: 4,
        image: eventsImage,
        title: 'Events',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis."
    }
]


const Offer = () => {
    const offerRef = useRef(null)

    const animateOffer = () => {
        const offerRefAnimate = gsap.utils.toArray(offerRef.current.querySelectorAll('div'))
        gsap.fromTo(offerRefAnimate, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y:0, duration: 1, stagger: 0.2, scrollTrigger: {
            trigger: offerRefAnimate,
            start: "top 100%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }})
    };


    useGSAP(() => {
        animateOffer()
    }, []);

    return (
        <section className="offer-section">
            <div className="offer-heading">We also offer unique <br />services for your events</div>
            <div className="offer-items-container" ref={offerRef}>
            { offerItems.map((offer) => 
                <div className="offer-item-list">
                    <img src={offer.image} alt="" className="offer-item-image" />
                    <div className="offer-item-header">{offer.title}</div>
                    <div className="offer-item-details">{offer.description}</div>
                </div>
            )}
            </div>
        </section>
)};

export default Offer