import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import useFetchHousing from '../../hooks/fetchHousing';
import './Home.scss';

function Home() {
  const { logements, loading, error } = useFetchHousing();
  const navigate = useNavigate();
  console.log(logements);
  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    navigate('/404', { state: { message: error.message } });
    return null;
  }

  return (
    <div className="home">
      <Section className="section" />
      <div className="housing-section">
        <div className="housing-container">
          {logements.map((logement) => (
            <Card className="housing-card" key={logement.id} logement={logement} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
