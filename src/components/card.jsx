import React, { useState } from 'react';
import '../card.css'; 

const Card = ({ title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`card ${isExpanded ? 'expanded' : ''}`}>
            <div className="card-header" onClick={handleExpandClick}>
                {title}
            </div>
            {isExpanded && <div className="card-content">{children}</div>}
        </div>
    );
};

export default Card;
