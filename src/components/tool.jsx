import React from 'react';
import '../tool.css';

const Tooltip = ({ message }) => {
    return (
        <div className="tooltip">
            {message}
        </div>
    );
};

export default Tooltip;
