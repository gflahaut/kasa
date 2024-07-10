import React from 'react';
import './Tag.scss';

const Tag = ({ name }) => {
    return (
      <div className="tag-section">
        <div className="tag">
            <h2 className="tag-title">{name}</h2>
        </div>
      </div>
    );
  };
  
  export default Tag;