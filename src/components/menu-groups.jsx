import React, { useState } from 'react';
import '../menu-groups.css';


import PizzaContent from './pizzapage';
import BurgerContent from './burgerpage';
import MiniPizzaContent from './minipage';
import DrinksContent from './drinkspage';
import StartersContent from './starterspage';
import DaeiAliContent from './DaeiAliContent';


const MenuGroups = () => {
    const links = [
        
        { label: 'برگر', component: BurgerContent },
        { label: 'پیتزا', component: PizzaContent },
        { label: 'مینی پیتزا', component: MiniPizzaContent },
        { label: 'نوشیدنی', component: DrinksContent },
        { label: 'پیش غذا', component: StartersContent },

    ];

    const [activeIndex, setActiveIndex] = useState(0); // Default to "پیتزا"

 /* { label: 'کتلت دایی علی', component: DaeiAliContent } */

    const handleClick = (index, event) => {
        event.preventDefault();
        setActiveIndex(index);
    };

    const ActiveComponent = links[activeIndex].component;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>



                <a 
                    href="#"
                    onClick={(event) => handleClick(links.length, event)}
                    className={`winking-text ${activeIndex === links.length ? 'active' : ''}`}
                    style={{ textDecoration: 'none', textAlign: 'center', fontSize: '1.5rem',  color: '#FFFFF0', paddingBottom: '10%' }}
                >
                    منوی دایی علی (شعبه اصلی)
                </a>



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
