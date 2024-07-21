// card.jsx
import React, { useState } from 'react';
import '../card.css'; 

const Card = ({ title, price, children, isExpandable }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        if (isExpandable) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className={`card ${isExpandable && isExpanded ? 'expanded' : ''}`}>
            <div className="card-header" onClick={handleExpandClick}>
                <div className="card-title">{title}</div>
                <div className="card-price">{price}</div>
            </div>
            {(isExpandable && isExpanded) || !isExpandable ? (
                <div style={{direction:"rtl"}} className="card-content">{children}</div>
            ) : null}
        </div>
    );
};

export default Card;
