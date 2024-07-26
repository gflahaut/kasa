import { useEffect, useState } from 'react';

function useFetchApropos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/src/assets/data/about.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching the apropos data:', error));
  }, []);

  return data;
}

export default useFetchApropos;