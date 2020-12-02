import './index.css';

const Card = ({ unit }) => {
  return (
    <>
      <div className="card">
        <div className="content-card">
          <div className="borda">
            <h2>Nome:</h2>
            <span>{unit.name}</span>
            <h2>Descrição:</h2>
            <span>{unit.description}</span>
            <h2>Expansão:</h2>
            <span>{unit.expansion}</span>
            <h2>Era:</h2>
            <span>{unit.age}</span>
            <h2>Ataque:</h2>
            <span>{unit.attack}</span>
            <h2>Armadura:</h2>
            <span>{unit.armor}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
