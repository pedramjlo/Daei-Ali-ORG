import React, { useState } from 'react';
import '../card.css'; 

const Card = ({ title, price, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        // Only toggle isExpanded if children is not empty or null
        if (children) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className={`card ${isExpanded ? 'expanded' : ''}`}>
            <div className="card-header" onClick={handleExpandClick}>
                <div className="card-title">{title}</div>
                <div className="card-price">{price}</div>
            </div>
            {isExpanded && <div className="card-content">{children}</div>}
        </div>
    );
};

export default Card;