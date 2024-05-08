import '../../styles/Menu.css'
import breakfastIcon from '../../assets/breakfast-icon.png'


const Menu = () => {
    
    // const menuList = [
    //     {
    //         id: 1,
    //         icon: breakfastIcon,
    //         title: 'Breakfast',
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque aperiam, amet ex voluptate."
    //     },
    //     {
    //         id: 2,
    //         icon: mainDishesIcon,
    //         title: 'Main Dishes',
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque aperiam, amet ex voluptate."
    //     },
    //     {
    //         id: 3,
    //         icon: drinksIcon,
    //         title: 'Drinks',
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque aperiam, amet ex voluptate."
    //     },
    //     {
    //         id: 4,
    //         icon: dessertsIcon,
    //         title: 'Desserts',
    //         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque aperiam, amet ex voluptate."
    //     },
    // ]
    
    
    return (
    <section className="menu-card-section">
        <div className="menu-title">Browse Our Menu</div>
        <div className="menu-card-container">
            <ul className="menu-cards">
                <li className="icon"><img src={breakfastIcon} alt="" className="menu-icon" /></li>
                <li className="card-title">Breakfast</li>
                <li className="card-descriotion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, minus ex rerum voluptates</li>
                <li className="card-cta">Explor Menu</li>
            </ul>
        </div>
    </section>

)};

export default Menu;