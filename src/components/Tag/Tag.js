import React from 'react';
import './Tag.scss';

const Tag = (props) => {
    const {tag} = props;
    return (
      <div className="tag-section">
        <div className="tag">
            <h2 className="tag-title">{tag}</h2>
        </div>
      </div>
    );
  };
  
  export default Tag;