import '../../styles/Delivery.css'
import deliveryImageLeft from '../../assets/delivery_1.png'
import deliveryImageUp from '../../assets/delivery_2.png'
import deliveryImageDown from '../../assets/delivery_3.png'

const Delivery = () => (
    <section className="delivery-section">
        <div className="picture-left"></div>
            <img src={deliveryImageLeft} alt="" className="delivery-image-left" />
        <div className="picture-middle">
            <img src={deliveryImageUp} alt="" className="delivery-image-up" />
            <img src={deliveryImageDown} alt="" className="delivery-image-down" />
        </div>
        <div className="delivery-section-text">
            <div className="delivery-title">Fast food delivery in city</div>
            <div className="delivery-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, voluptate.</div>
            <ul>
                <li>Delivery within 30 mins</li>
                <li>Best Offer & Prices</li>
                <li>Online Service available</li>
            </ul>
        </div>
    </section>
);

export default Delivery