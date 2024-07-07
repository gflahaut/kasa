import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ logement }) {
  const divRef = useRef(null);
  const words = logement.title.split(' ');
  let midpoint = Math.floor(words.length / 2);
  let firstLine = words.slice(0, midpoint).join(' ');
  let secondLine = words.slice(midpoint).join(' ');

  if (firstLine.length > secondLine.length) {
    while (firstLine.length - secondLine.length > words[0].length && midpoint > 0) {
      midpoint -= 1;
      firstLine = words.slice(0, midpoint).join(' ');
      secondLine = words.slice(midpoint).join(' ');
    }
  } else {
    while (secondLine.length - firstLine.length > words[0].length && midpoint < words.length) {
      midpoint += 1;
      firstLine = words.slice(0, midpoint).join(' ');
      secondLine = words.slice(midpoint).join(' ');
    }
  }

  useEffect(() => {
    const adjustFontSize = () => {
      const element = document.getElementById('elementId'); // Remplacez par votre ID d'élément cible
      if (element) {
      } else {
        console.warn('Element with ID "elementId" not found.');
      }
      const div = divRef.current;
      if (div.scrollHeight > div.clientHeight) {
        div.style.fontSize = '1em';
      }
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, []);

  return (
    <Link to={`/details/${logement.id}`} className="card-link">
      <div className="card" id='grid-container' ref={divRef}>
        <img src={logement.cover} alt={logement.title} className="card-img" />
        <h2 className="card-title">{firstLine}<br />{secondLine}</h2>
      </div>
    </Link>
  );
}

export default Card;