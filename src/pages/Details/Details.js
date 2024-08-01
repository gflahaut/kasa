import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import './Details.scss'; 
import useFetchHousing from '../../hooks/fetchHousing';
import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Rate from '../../components/Rate/Rate';
import Host from '../../components/Host/Host';

const Details = () => {
  const { logements, loading, error } = useFetchHousing();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (logements.length > 0) {
      const foundLogement = logements.find(l => l.id === id);
      if (foundLogement) {
        setLogement(foundLogement);
      } else {
        navigate('/404', { state: { message: 'Logement non trouvé' } });
      }
    }
  }, [logements, id, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!logement) {
    return null;
  }

  return (
    <div className="details-container">
      <Carrousel logement={logement} className="details-carrousel" />
      <section className="details-hostInfo">
        <div className="details-title-tags">
          <div className="details-title-container">
            <h1 className="details-h1">{logement.title}</h1>
            <h3 className="details-h3">{logement.location}</h3>
          </div>
        </div>
        <div className="host">
          <Host id={logement.id} hostName={logement.host.name} hostPic={logement.host.picture} />
        </div>
        <div className="rating">
          <Rate score={logement.rating} />
        </div>
        <div className="details-tags">
          {logement.tags.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </div>
        <div className="details-collapse">
          <Collapse
            aboutTitle="Description"
            aboutText={logement.description}
            aboutStyle="collapse-details"
          />
          <Collapse
            aboutStyle="collapse-details"
            aboutTitle="Équipements"
            aboutText={
              <ul>
                {logement.equipments.map((item, index) => (
                  <li key={index} className="equipList">
                    {item}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Details;

