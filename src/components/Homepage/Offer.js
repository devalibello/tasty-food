import '../../styles/Offer.css'
import cateringsImage from '../../assets/caterings.webp'
import birthdaysImage from '../../assets/birthdays.webp'
import weddingsImage from '../../assets/weddings.webp'
import eventsImage from '../../assets/events.webp'

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


const Offer = () => (
<section className="offer-section">
    <div className="offer-heading">We also offer unique <br />services for your events</div>
    <div className="offer-items-container">
    { offerItems.map((offer) => 
        <div className="offer-item-list">
            <img src={offer.image} alt="" className="offer-item-image" />
            <div className="offer-item-header">{offer.title}</div>
            <div className="offer-item-details">{offer.description}</div>
        </div>
    )}
    </div>
</section>
);

export default Offer