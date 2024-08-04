import '../../styles/Customers.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import firstCustomerImage from '../../assets/customer-1.webp'
import secondCustomerImage from '../../assets/customer-2.webp'
import thirdCustomerImage from '../../assets/customer-3.webp'

gsap.registerPlugin(ScrollTrigger)

const customers = [
    {
        id: 1,
        image: firstCustomerImage,
        title: 'Unforgettable Dining Experience',
        description: "The food here is absolutely amazing! Every dish is crafted to perfection, and the ambiance is just right.",
        name: "Sophie Robbert",
        location: "Los Angeles, CA"
    },
    {
        id: 2,
        image: secondCustomerImage,
        title: 'Exceptional Service and Quality',
        description: "I’ve never had a bad meal here. The service is outstanding, and the quality of the food is top-notch.",
        name: "Allen Mike",
        location: "San Diego, CA"
    },
    {
        id: 3,
        image: thirdCustomerImage,
        title: 'A True Culinary Gem with Unique Flavors',
        description: "This restaurant is a hidden gem! The flavors are unique, and the presentation is always impressive.",
        name: "Chris Rock",
        location: "Kano, Nigeria"
    }
];


const Customers = () => {

    const customersCardRef = useRef(null);

    const animateCustomers = () => {
        const customer = customersCardRef.current.querySelectorAll('ul');

        gsap.fromTo(customer,{autoAlpha: 0, y: 100, duration: 1.5}, {autoAlpha: 1, y: 0, duration: 2, stagger: 0.5, scrollTrigger: {
            trigger: customer,
            start: "top 87%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }})
    }

    useGSAP(() => {
        animateCustomers();
    }, [])

    return (
        <div className="customers-section">
            <div className="customer-header">What Our Customers Say</div>
            <div className="customer-card-section" ref={customersCardRef}>
                {customers.map((customer) => 
                    <ul className="customer-card" key={customer.id}>
                        <li className="review-title">"{customer.title}"</li>
                        <li className="review-description">{customer.description}</li>
                        <li><hr/></li>
                        <li className="customer-image-section">
                            <img src={customer.image} alt="" className="customer-image" />
                            <div className="customer-name-location">
                                <div className="customer-name">{customer.name}</div>
                                <div className="customer-location">{customer.location}</div>
                            </div>
                        </li>
                    </ul>        
                )}
            </div>
        </div>
)};

export default Customers