// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Carrousel.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes

// const Carrousel = ({ logement }) => {
//   const navigate = useNavigate();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   if (!logement) {
//     navigate('/404', { state: { message: "Impossible d'obtenir les données" } });
//     return null;
//   }

//   const handlePrevClick = () => {
//     setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const handleNextClick = () => {
//     setCurrentImageIndex((prevIndex) => Math.min(prevIndex + 1, logement.pictures.length - 1));
//   };

//   return (
//     <div className="carrousel-section">
//       <div className="carrousel">
//         <button className="carrousel-button-left" onClick={ handlePrevClick } disabled={ currentImageIndex === 0 }>
//           <FontAwesomeIcon className="carrousel-icon left" icon={ faChevronLeft } /> {/* Icône "Précédent" */ }
//         </button>
//         { logement.pictures.map((picture, index) => (
//           <div key={ index } className='carrousel-container'>
//             { index === currentImageIndex && (
//               <img className="carrousel-img" id='carrousel-picture' src={ picture } alt={ logement.title } />
//             ) }

//           </div>
//         )) }
//         <button className="carrousel-button-right" onClick={ handleNextClick } disabled={ currentImageIndex === logement.pictures.length - 1 }>
//           <FontAwesomeIcon className="carrousel-icon right" icon={ faChevronRight } /> {/* Icône "Suivant" */ }
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Carrousel;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carrousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carrousel = ({ logement }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    navigate('/404', { state: { message: "Impossible d'obtenir les données" } });
    return null;
  }

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carrousel-section">
      <div className="carrousel">
        <button className="carrousel-button-left" onClick={handlePrevClick}>
          <FontAwesomeIcon className="carrousel-icon left" icon={faChevronLeft} />
        </button>
        <div className="carrousel-container">
          <img className="carrousel-img" src={logement.pictures[currentImageIndex]} alt={logement.title} />
        </div>
        <button className="carrousel-button-right" onClick={handleNextClick}>
          <FontAwesomeIcon className="carrousel-icon right" icon={faChevronRight} />
        </button>
      </div>
      <div className="carrousel-indicators">
        {`${currentImageIndex + 1} / ${logement.pictures.length}`}
      </div>
    </div>
  );
};

export default Carrousel;
