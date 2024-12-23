import React from 'react';
import { useParams } from 'react-router-dom';
import PetDetails from '../components/PetDetails';
import AdocaoForm from '../components/AdocaoForm';

const pets = [
  { id: 1, name: 'Rex', breed: 'Labrador', age: 3, description: 'Muito carinhoso.', image: 'rex.jpg' },
  { id: 2, name: 'Mia', breed: 'Persa', age: 2, description: 'Adora brincar.', image: 'mia.jpg' },
  { id: 3, name: 'Fido', breed: 'Beagle', age: 4, description: 'Muito ativo.', image: 'fido.jpg' },
];

const PetDetailsPage = () => {
  const { id } = useParams();
  const pet = pets.find(pet => pet.id === parseInt(id));

  return (
    <div className="pet-details-page">
      <PetDetails pet={pet} />
      <AdocaoForm />
    </div>
  );
};

export default PetDetailsPage;
