import '../../styles/Delivery.css'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import gsap from 'gsap'
import deliveryImageLeft from '../../assets/delivery_1.webp'
import deliveryImageUp from '../../assets/delivery_2.webp'
import deliveryImageDown from '../../assets/delivery_3.webp'
import deliveryIconOne from '../../assets/delivery-icon-1.webp'
import deliveryIconTwo from '../../assets/delivery-icon-2.webp'
import deliveryIconThree from '../../assets/delivery-icon-3.webp'

gsap.registerPlugin(ScrollTrigger)

const Delivery = () => {

    const deliveryPictureLeftRef = useRef(null);
    const deliveryPictureMiddleRef = useRef(null);
    const deliveryTextRef = useRef(null);

    const animateDelivery = () => {

        const deliveryTextElements = deliveryTextRef.current.querySelectorAll('div');

 
        gsap.fromTo(deliveryTextElements,{autoAlpha: 0, x: 100, duration: 1.5}, {autoAlpha: 1, x: 0, duration: 2, stagger: 0.2, scrollTrigger: {
            trigger: deliveryTextElements,
            start: "top 87%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }})
        gsap.fromTo(deliveryPictureLeftRef.current,{autoAlpha: 0, x: -100},{autoAlpha: 1, x: 0, duration: 2, scrollTrigger: {
            trigger: deliveryPictureLeftRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }}, 0)
        gsap.fromTo(deliveryPictureMiddleRef.current,{autoAlpha: 0, x: -100},{autoAlpha: 1, x: 0, duration: 2, scrollTrigger: {
            trigger: deliveryPictureMiddleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: 'play none none none'
        }}, 0)
    }

    useGSAP(() => {
        animateDelivery();
    }, [])

    return (
<section className="delivery-container">
    <div className='delivery-section-background'>
        <div className="delivery-section">
            <div className="delivery-grid">
                <div className="picture-left" ref={deliveryPictureLeftRef}>
                    <img src={deliveryImageLeft} alt="" className="delivery-image-left" />
                </div>
                <div className="picture-middle" ref={deliveryPictureMiddleRef}>
                    <img src={deliveryImageUp} alt="" className="delivery-image-up" />
                    <img src={deliveryImageDown} alt="" className="delivery-image-down" />
                </div>
            </div>
            <div className="delivery-section-text" ref={deliveryTextRef}>
                <div className="delivery-title">Fast Food <br /> Delivery in the City</div>
                <div className="delivery-description">
                    Experience the convenience of our swift and reliable fast food delivery service, bringing delicious meals straight to your door.
                </div>
                <div className='delivery-icon-section'>
                    <div className='delivery-icon'>
                        <img src={deliveryIconOne} alt="Fast Delivery" className="delivery-icon-1" />
                        <div>Delivery within 30 mins</div>
                    </div>
                    <div className='delivery-icon'>
                        <img src={deliveryIconTwo} alt="Best Prices" className="delivery-icon-2" />
                        <div>Best Offer & Prices</div>
                    </div>
                    <div className='delivery-icon'>
                        <img src={deliveryIconThree} alt="Online Service" className="delivery-icon-3" />
                        <div>Online Service Available</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)};

export default Delivery