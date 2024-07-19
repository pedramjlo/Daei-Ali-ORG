import React, { useState } from 'react';
import '../menu-groups.css';

import PizzaContent from './pizzapage';
import BurgerContent from './burgerpage';
import MiniPizzaContent from './minipage';
import DrinksContent from './drinkspage';
import StartersContent from './starterspage';

const MenuGroups = () => {
    const links = [
        { label: 'پیتزا', component: PizzaContent },
        { label: 'برگر', component: BurgerContent },
        { label: 'مینی پیتزا', component: MiniPizzaContent },
        { label: 'نوشیدنی', component: DrinksContent },
        { label: 'پیش غذا', component: StartersContent }
    ];

    const [activeIndex, setActiveIndex] = useState(0); // Default to "پیتزا"

    const handleClick = (index, event) => {
        event.preventDefault();
        setActiveIndex(index);
    };

    const ActiveComponent = links[activeIndex].component;

    return (
        <div>
            <ul className='menu-list'>
                {links.map((link, index) => (
                    <li key={index}>
                        <a 
                            href="#" 
                            onClick={(event) => handleClick(index, event)} 
                            className={activeIndex === index ? 'active' : ''}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='content'>
                <ActiveComponent />
            </div>
        </div>
    );
};

export default MenuGroups;
