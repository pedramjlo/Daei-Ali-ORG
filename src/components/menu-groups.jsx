import React, { useState } from 'react';
import '../menu-groups.css';

const MenuGroups = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [content, setContent] = useState('');

    const handleClick = (index, newContent, event) => {
        event.preventDefault();
        setActiveIndex(index);
        setContent(newContent);
    };

    const links = [
        { label: 'پیتزا', content: 'Pizza Content' },
        { label: 'برگر', content: 'Burger Content' },
        { label: 'مینی پیتزا', content: 'Mini Pizza Content' },
        { label: 'نوشیدنی', content: 'Drinks Content' },
        { label: 'پیش غذا', content: 'Appetizers Content' }
    ];

    return (
        <div>
            <ul className='menu-list'>
                {links.map((link, index) => (
                    <li key={index}>
                        <a 
                            href="#" 
                            onClick={(event) => handleClick(index, link.content, event)} 
                            className={activeIndex === index ? 'active' : ''}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='content'>
                {content}
            </div>
        </div>
    );
};

export default MenuGroups;
 