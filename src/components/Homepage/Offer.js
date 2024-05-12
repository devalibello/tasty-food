import '../../styles/Offer.css'
import offerItemOne from '../../assets/offer-item-1.png'

// const offerItems = [
//     {

//     }
// ]


const Offer = () => (
<section className="offer-section">
    <div className="offer-heading">We also offer unique <br />services for your events</div>
    <div className="offer-items-container">
        <div className="offer-item-list">
            <img src={offerItemOne} alt="" className="offer-item-image" />
            <div className="offer-item-header">Catering</div>
            <div className="offer-item-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className="offer-item-list">
            <img src={offerItemOne} alt="" className="offer-item-image" />
            <div className="offer-item-header">Catering</div>
            <div className="offer-item-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className="offer-item-list">
            <img src={offerItemOne} alt="" className="offer-item-image" />
            <div className="offer-item-header">Catering</div>
            <div className="offer-item-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className="offer-item-list">
            <img src={offerItemOne} alt="" className="offer-item-image" />
            <div className="offer-item-header">Catering</div>
            <div className="offer-item-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
    </div>
</section>
);

export default Offer