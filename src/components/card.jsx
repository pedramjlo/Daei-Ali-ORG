// Card.js
import React, { useState } from 'react';
import '../card.css'; 

const Card = ({ title, price, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`card ${isExpanded ? 'expanded' : ''}`}>
            <div className="card-header" onClick={handleExpandClick}>
                <div className="card-title">{title}</div>
                <div className="card-price">{price}</div>
            </div>
            {isExpanded && <div style={{direction:"rtl"}} className="card-content">{children}</div>}
        </div>
    );
};

export default Card;
