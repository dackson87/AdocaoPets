import React, { useState } from 'react';
import './Suporte.css';

const Suporte = ({ title, contactEmail, contactPhone }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Sua mensagem foi enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="suporte-container">
      <h2>{title}</h2> {/* Recebe o título via props */}

      <section className="contact-form-section">
        <h3>Entre em Contato Conosco</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit" className="submit-button">
            Enviar
          </button>
        </form>
      </section>

      <section className="contact-info-section">
        <h3>Informações de Contato</h3>
        <p>Email: {contactEmail}</p> {/* Recebe e exibe o e-mail via props */}
        <p>Telefone: {contactPhone}</p> {/* Recebe e exibe o telefone via props */}
      </section>
    </div>
  );
};

export default Suporte;
