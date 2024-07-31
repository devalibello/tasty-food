import '../../styles/Menu.css'
import breakfastIcon from '../../assets/breakfast-icon.webp';
import drinksIcon from '../../assets/drinks-icon.webp';
import mainDishesIcon from '../../assets/maindish-icon.webp';
import dessertsIcon from '../../assets/desserts-icon.webp';


const Menu = () => {
    
    const menuList = [
        {
            id: 1,
            icon: breakfastIcon,
            title: 'Breakfast',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque aperiam, amet ex voluptate."
        },
        {
            id: 2,
            icon: mainDishesIcon,
            title: 'Main Dishes',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque aperiam, amet ex voluptate."
        },
        {
            id: 3,
            icon: drinksIcon,
            title: 'Drinks',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque aperiam, amet ex voluptate."
        },
        {
            id: 4,
            icon: dessertsIcon,
            title: 'Desserts',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque aperiam, amet ex voluptate."
        },
    ]
    
    
    return (
    <section className="menu-card-section">
        <div className="menu-title">Browse Our Menu</div>
            <div className="menu-card-template">
            {  menuList.map((menu) => (
                <div className="menu-card-container">
                    <ul className="menu-cards">
                        <li className="icon"><img src={menu.icon} alt="" className="menu-icon" /></li>
                        <li className="card-title">{menu.title}</li>
                        <li className="card-description">{menu.description}</li>
                        <li className="card-cta">Explore Menu</li>
                    </ul>
                </div>
            ))  }
            </div>
    </section>

)};

export default Menu;