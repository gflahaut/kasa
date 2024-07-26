import { useState, useEffect } from 'react';
// import logementsData from '../assets/data/logements.json';

function useFetchHousing() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/logements.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLogements(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the logements data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return { logements, loading, error };
}

export default useFetchHousing;