import '../../styles/Menu.css'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import breakfastIcon from '../../assets/breakfast-icon.svg';
import drinksIcon from '../../assets/drinks-icon.svg';
import mainDishesIcon from '../../assets/main-dish-icon.svg';
import dessertsIcon from '../../assets/desserts-icon.svg';

gsap.registerPlugin(ScrollTrigger);


const menuList = [
    {
        id: 1,
        icon: breakfastIcon,
        title: 'Breakfast',
        description: "Start your day with our delicious and nutritious breakfast options, crafted to energize and satisfy you."
    },
    {
        id: 2,
        icon: mainDishesIcon,
        title: 'Main Dishes',
        description: "Indulge in our exquisite main dishes, featuring a variety of flavors and ingredients to delight every palate."
    },
    {
        id: 3,
        icon: drinksIcon,
        title: 'Drinks',
        description: "Quench your thirst with our selection of refreshing beverages, from classic cocktails to unique house specials."
    },
    {
        id: 4,
        icon: dessertsIcon,
        title: 'Desserts',
        description: "End your meal on a sweet note with our delectable desserts, each one a perfect blend of taste and presentation."
    },
];


const Menu = () => {

    const menuRef = useRef(null);

    const animateMenu = () => {
        const menuAnimate = gsap.utils.toArray(menuRef.current.querySelectorAll('div'));
        gsap.fromTo(menuAnimate, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, duration: 1.5, stagger: 0.5,scrollTrigger: {
                        trigger: menuAnimate,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    } });
    };

    useGSAP(() => {
        animateMenu();
    }, []);
    
    return (
    <section className="menu-container">
        <div className="menu-card-section">
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
        </div>
    </section>
)};

export default Menu;