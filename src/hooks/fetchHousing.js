import { useState, useEffect } from 'react';
import logementsData from '../assets/data/logements.json';

function useFetchHousing() {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    setLogements(logementsData);
  }, []);
  console.log(logements);
  return logements;
}

export default useFetchHousing;
