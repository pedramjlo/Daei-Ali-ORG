import React, { useState } from 'react';
import '../card.css'; 
import { TbHandClick } from "react-icons/tb";

const Card = ({ title, price, children, isHighlighted, onExpand }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        if (children) {
            setIsExpanded(!isExpanded);
            if (onExpand) {
                onExpand();
            }
        }
    };

    return (
        <div className={`card ${isExpanded ? 'expanded' : ''} ${isHighlighted ? 'highlighted' : ''}`}>
            <div
                className={`card-header ${isHighlighted ? 'highlighted' : ''}`}
                onClick={handleExpandClick}
            >
                <div className="card-title">
                    {title}
                    {isHighlighted && (
                        <TbHandClick className='bouncing-icon' />
                    )}
                </div>
                <div className="card-price">{price}</div>
            </div>
            {isExpanded && <div className="card-content">{children}</div>}
        </div>
    );
};

export default Card;
