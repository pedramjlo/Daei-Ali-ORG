import React, { useState } from 'react';
import '../ExpandableComponent.css';

const ExpandableComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="expandable-component">
      <button className="expand-button" onClick={toggleExpand}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      <div className={`content ${expanded ? 'expanded' : ''}`}>
        <p>This is the expandable content. It will be shown or hidden when the button is clicked.</p>
      </div>
    </div>
  );
};

export default ExpandableComponent;
