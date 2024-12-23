import React from 'react';

const PetDetails = ({ pet }) => {
  return (
    <div className="pet-details">
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p><strong>Raça:</strong> {pet.breed}</p>
      <p><strong>Idade:</strong> {pet.age} anos</p>
      <p><strong>Descrição:</strong> {pet.description}</p>
    </div>
  );
};

export default PetDetails;
