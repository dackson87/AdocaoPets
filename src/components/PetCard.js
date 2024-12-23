import React from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.breed}</p>
      <Link to={`/pet/${pet.id}`}>Ver detalhes</Link>
    </div>
  );
};

export default PetCard;
