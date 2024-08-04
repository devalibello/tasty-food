import '../../styles/Customers.css'
import firstCustomerImage from '../../assets/customer-1.webp'
import secondCustomerImage from '../../assets/customer-2.webp'
import thirdCustomerImage from '../../assets/customer-3.webp'

const customers = [
    {
        id: 1,
        image: firstCustomerImage,
        title: 'The best restaurant',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis.",
        name: "Sophie Robbert",
        location: "Los Angeles, CA"
    },
    {
        id: 2,
        image: secondCustomerImage,
        title: 'Simply the best',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis.",
        name: "Allen Mike",
        location: "San Diego, CA"
    },
    {
        id: 3,
        image: thirdCustomerImage,
        title: 'One of a kind restaurant',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facilis.",
        name: "Chris Rock",
        location: "Kano, Nigeria"
    }
]

const Customers = () => {

    const deliveryTextRef = useRef(null);

    const animateCustomers = () => {
 
        gsap.fromTo(deliveryTextRef.current,{autoAlpha: 0, y: 100, duration: 1.5}, {autoAlpha: 1, y: 0, duration: 2, stagger: 0.5, scrollTrigger: {
            trigger: deliveryTextRef.current,
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
            <div className="customer-card-section">
                {customers.map((customer) => 
                    <div className="customer-card" key={customer.id}>
                        <div className="review-title">"{customer.title}"</div>
                        <div className="review-description">{customer.description}</div>
                        <hr/>
                        <div className="customer-image-section">
                            <img src={customer.image} alt="" className="customer-image" />
                            <div className="customer-name-location">
                                <div className="customer-name">{customer.name}</div>
                                <div className="customer-location">{customer.location}</div>
                            </div>
                        </div>
                    </div>        
                )}
            </div>
        </div>
)};

export default Customers