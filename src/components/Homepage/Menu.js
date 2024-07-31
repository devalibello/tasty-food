import '../../styles/Menu.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import breakfastIcon from '../../assets/breakfast-icon.webp';
import drinksIcon from '../../assets/drinks-icon.webp';
import mainDishesIcon from '../../assets/maindish-icon.webp';
import dessertsIcon from '../../assets/desserts-icon.webp';

gsap.registerPlugin(ScrollTrigger);


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

const Menu = () => {

    const menuRef = useRef(null);

    const animateMenu = () => {
        const menuAnimate = menuRef.current.querySelectorAll('div');
        gsap.fromTo(menuAnimate, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, duration: 2, stagger: 0.5,scrollTrigger: {
                        trigger: menuAnimate,
                        start: "top 80%",
                        end: "bottom 20%",
                        markers: true,
                        toggleActions: "play none none none",
                    } });
    };

    useEffect(() => {
        animateMenu();
    }, []);
    
    return (
    <section className="menu-card-section">
        <div className="menu-title">Browse Our Menu</div>
            <div className="menu-card-template" ref={menuRef}>
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