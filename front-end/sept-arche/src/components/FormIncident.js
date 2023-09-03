import React, { useState } from "react";
import axios from "axios";

const FormIncident = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [incident, setIncident] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // créer l'objet
    const ticket = {
      nom,
      email,
      incident,
      description,
    };

    //  envoyer le ticket d'incident à votre backend ou API
    //console.log(ticket);

    // Envoyer le ticket d'incident à votre backend
    axios
      .post("http://localhost:8090/incident", ticket)
      .then((response) => {
        console.log(response);
        console.log("Ticket d'incident envoyé avec succès");

        // Réinitialiser les champs du formulaire
        setNom("");
        setEmail("");
        setIncident("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du ticket d'incident", error);
      });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mt-4"
      style={{
        boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <div className="form-group">
        <label htmlFor="nom">Nom : *</label>
        <input
          type="text"
          className="form-control"
          id="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email: *</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="incident">Categorie : *</label>
        <select
          className="form-control"
          id="incident"
          value={incident}
          onChange={(event) => setIncident(event.target.value)}
          required
        >
          <option value="">Choix domaine d'assistance</option>
          <option value="Problème de connection">Problème de connection</option>
          <option value="Article non reçu">Article manquant</option>
          <option value="Article endommagé">Article endommagé</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description :</label>
        <textarea
          className="form-control"
          id="description"
          rows="4"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-dark">
        Envoyer
      </button>
    </form>
  );
};

export default FormIncident;
