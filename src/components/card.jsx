// card.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../card.css';

const Card = ({ title, price, children, isExpandable, className = '' }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const cardRef = useRef(null);

    const handleExpandClick = () => {
        if (isExpandable) {
            setIsExpanded(!isExpanded);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div
            ref={cardRef}
            className={`card ${className} ${isExpandable && isExpanded ? 'expanded' : ''} ${hasAnimated ? 'animated' : ''}`}
        >
            <div className="card-header" onClick={handleExpandClick}>
                <div className="card-title">{title}</div>
                <div className="card-price">{price}</div>
            </div>
            {(isExpandable && isExpanded) || !isExpandable ? (
                <div style={{ direction: "rtl" }} className="card-content">{children}</div>
            ) : null}
        </div>
    );
};

export default Card;
