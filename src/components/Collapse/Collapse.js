import React, { useState } from 'react';
import './Collapse.scss'; // Assurez-vous d'avoir le fichier CSS pour les styles

function Collapse({ aboutTitle, aboutText, aboutStyle }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${aboutStyle}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{aboutTitle}</h3>
        <span className={`collapse-icon ${isOpen ? 'open' : ''}`}>
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </span>
      </div>
      {isOpen && <div className="collapse-content">{aboutText}</div>}
    </div>
  );
}

export default Collapse;
