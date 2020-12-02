import { useState, useEffect } from 'react';
import './index.css';
import Card from '../Card';
import axios from 'axios';

const FlexSection = () => {
  const [unidade, setUnidade] = useState(null);
  useEffect(() => {
    async function pegarDados() {
      const response = await axios.get(
        'https://age-of-empires-2-api.herokuapp.com/api/v1/units',
      );
      setUnidade(response.data);
    }
    pegarDados();
  }, []);

  if (unidade === null) {
    return <p>Buscando unidades...</p>;
  }

  return (
    <>
      <h1>Age of Empires II - Age of Kings</h1>
      <section className="flex-section">
        {unidade.units.map((item) => (
          <Card key={item.id} unit={item}></Card>
        ))}
      </section>
    </>
  );
};

export default FlexSection;
