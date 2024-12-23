import React from 'react';

const petsAdotados = [
  { id: 1, name: 'Rex', breed: 'Labrador', age: 3, image: 'labrador.png' },
  { id: 2, name: 'Mia', breed: 'Persa', age: 2, image: 'persa.png' },
];

const PetsAdotados = () => {
  return (
    <div className="pets-adotados">
      <h1>Pets Adotados</h1>
      <div className="pet-list">
        {petsAdotados.map((pet) => (
          <div key={pet.id} className="pet-card">
             <img 
            src={`./img/${pet.image}`} 
            alt={pet.name} 
            className="pet-image" 
          />
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsAdotados;