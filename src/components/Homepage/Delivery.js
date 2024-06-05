import '../../styles/Delivery.css'
import deliveryImageLeft from '../../assets/delivery_1.png'
import deliveryImageUp from '../../assets/delivery_2.png'
import deliveryImageDown from '../../assets/delivery_3.png'
import deliveryIconOne from '../../assets/delivery-icon-1.png'
import deliveryIconTwo from '../../assets/delivery-icon-2.png'
import deliveryIconThree from '../../assets/delivery-icon-3.png'

const Delivery = () => (
    <section className="delivery-section">
        <div className="picture-left">
            <img src={deliveryImageLeft} alt="" className="delivery-image-left" />
        </div>
        <div className="picture-middle">
            <img src={deliveryImageUp} alt="" className="delivery-image-up" />
            <img src={deliveryImageDown} alt="" className="delivery-image-down" />
        </div>
        <div className="delivery-section-text">
            <div className="delivery-title">Fast Food <br /> Delivery in city</div>
            <div className="delivery-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, voluptate.</div>
            <div className='delivery-icon-section'>
                <div className='delivery-icon'>
                    <img src={deliveryIconOne} alt="" className="delivery-icon-1" />
                    <div>Delivery within 30 mins</div>
                </div>
                <div className='delivery-icon'>
                    <img src={deliveryIconTwo} alt="" className="delivery-icon-2" />
                    <div>Best Offer & Prices</div>
                </div>
                <div className='delivery-icon'>
                    <img src={deliveryIconThree} alt="" className="delivery-icon-3" />
                    <div>Online Service available</div>
                </div>
            </div>
        </div>
    </section>
);

export default Delivery