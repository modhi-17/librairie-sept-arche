import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:8090/user', credentials)
      .then(response => {
        console.log(response.data);
        // Effectuer les actions nécessaires après la connexion réussie, par exemple, rediriger vers une autre page.
      window.location.href='http://localhost:3000/';
      })
    
      .catch(error => {
        console.error(error);
        // Gérer les erreurs de connexion, par exemple, afficher un message d'erreur à l'utilisateur.
      });
  };
  return (
    <div className="container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
