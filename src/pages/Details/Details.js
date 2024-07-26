import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import './Details.scss'; 
import useFetchHousing from '../../hooks/fetchHousing';
import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Rate from '../../components/Rate/Rate';
import Host from '../../components/Host/Host';

function Details() {
  const { logements, loading, error } = useFetchHousing();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();
  console.log(logements);
  console.log(useFetchHousing());


  useEffect(() => {
    if (logements.length > 0) {
      const foundLogement = logements.find(l => l.id === id);
      console.log(foundLogement);
      if (foundLogement) {
        setLogement(foundLogement);
      } else if(error){
        navigate('/404', { state: { message: error.message } });
        return null;
      }
    }else if(loading){
      return <div>Loading ...</div>;
    }
  }, [logements, id, navigate, loading, error]);


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
        {/* <div className="host-rating">
          
        </div> */}
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
