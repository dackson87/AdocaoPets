import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialPets = [
  { id: 1, name: 'Rex', breed: 'Labrador', age: 3, image: 'labrador.png', adopted: false },
  { id: 2, name: 'Mia', breed: 'Persa', age: 2, image: 'persa.png', adopted: false },
  { id: 3, name: 'Bob', breed: 'Beagle', age: 4, image: 'Beagle.png', adopted: false },
];

const Home = () => {
  const [pets, setPets] = useState(initialPets);
  const [showModal, setShowModal] = useState(false);
  const [currentPet, setCurrentPet] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const adoptPet = (pet) => {
    setCurrentPet(pet); 
    setShowModal(true); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      const updatedPets = pets.map((pet) =>
        pet.id === currentPet.id ? { ...pet, adopted: true } : pet
      );
      setPets(updatedPets);
      setShowModal(false);
      alert('Pet adotado com sucesso!');
    } else {
      alert('Preencha todos os campos.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="home-container">
      <h2>Adote um Pet!</h2>
      <div className="home-pet-cards">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img
              src={`./img/${pet.image}`}
              alt={pet.name}
              className="pet-image"
            />
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
            <p>Idade: {pet.age} anos</p>

            {pet.adopted ? (
              <button disabled className="adopted-button">
                Adotado
              </button>
            ) : (
              <button onClick={() => adoptPet(pet)} className="adopt-button">
                Adotar
              </button>
            )}
          </div>
        ))}
      </div>

      <Link to="/pets-adotados" className="view-adopted-pets-link">
        <button className="view-adopted-pets-button">Ver Pets Adotados</button>
      </Link>

      {/* Modal de Adoção */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Adote o Pet: {currentPet.name}</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <br />
              <label htmlFor="phone">Telefone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <br />
              <div className="modal-buttons">
                <button type="submit" className="submit-button">Enviar</button>
                <button type="button" onClick={handleCancel} className="cancel-button">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
