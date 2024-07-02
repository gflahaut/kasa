
import React from 'react';
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import useFetchHousing from '../../hooks/fetchHousing';
import './Home.scss';

function Home() {
  const logements = useFetchHousing();

  return (
    <div className="home">
      <Section className='section' />
      <div className='housing-section'>
        <div className='housing-container'>
          { logements.map((logement) => (
            <Card className='housing-card' key={ logement.id } logement={ logement } />
          )) }
        </div>
      </div>
    </div>
  );
}

export default Home;
