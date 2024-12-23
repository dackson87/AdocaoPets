import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PetDetailsPage from './pages/PetDetailsPage';
import Sobre from './pages/Sobre';
import Suporte from './pages/Suporte';
import PetsAdotados from './pages/PetsAdotados';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:id" element={<PetDetailsPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route 
          path="/suporte" 
          element={<Suporte 
            title="Suporte ao Cliente" 
            contactEmail="suporte@adocao-pets.com"
            contactPhone="(11) 1234-5678"
          />} 
        />
        <Route path="/pets-adotados" element={<PetsAdotados />} />
      </Routes>
    </Router>
  );
};

export default App;