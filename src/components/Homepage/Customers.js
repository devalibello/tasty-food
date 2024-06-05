import '../../styles/Customers.css'
import firstCustomerImage from '../../assets/customer-1.png'
import secondCustomerImage from '../../assets/customer-2.png'
import thirdCustomerImage from '../../assets/customer-3.png'

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

const Customers = () => (
    <section className="customers-section">
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
    </section>
);

export default Customers