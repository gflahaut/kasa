import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
// Importez d'autres composants nécessaires comme Carrousel, Tag, Host, Rate, etc.
import Collapse from "../../components/Collapse/Collapse";
import './Details.scss'; // Assurez-vous que votre fichier de style est correctement importé
import useFetchHousing from '../../hooks/fetchHousing';
import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Rate from '../../components/Rate/Rate';
import Host from '../../components/Host/Host';


const Details = () => {
  const logements = useFetchHousing();
  const { id } = useParams(); 
  const logement = logements.find(l => l.id === id);
  const navigate = useNavigate();
  if (!logement) {
    navigate("/404", { state: { message: "Can't get data" } });
    return null;
  }
  return (
    <div className="details-container">
      <Carrousel logement={ logement } className="details-carrousel" />
      <section className="details-hostInfo">
        <div className="details-title-tags">
          <div className="details-title-container">
            <h1 className="details-h1">{ logement.title }</h1>
            <h3 className="details-h3">{ logement.location }</h3>
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <Host hostName={logement.host.name} hostPic={logement.host.picture}/>
            <div className="rating">
            <Rate score={ logement.rating } />
            </div>
          </div>
        </div>
        <div className="details-tags">
            { logement.tags.map(tag => (<Tag tag={ tag } />
            )) }
          </div>
      
      <div className="details-collapse">
        <Collapse className="collapse"
          aboutTitle="Description"
          aboutText={ logement.description }
        />
        <Collapse className="collapse"
          aboutTitle="Équipements"
          aboutText={ logement.equipments.map((item, index) => (
            <li key={ index } className="equipList">
              { item }
            </li>
          )) }
        />
      </div>
      </section>
    </div>
  );
};

export default Details;
