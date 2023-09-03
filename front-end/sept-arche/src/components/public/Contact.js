import React,{useState}from 'react';
import '../public/Contact.css';
import axios from "axios";


const Contact = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [prenom, setPrenom] = useState("");
  const [motDePasse, setMotDePasse] = useState("");




  const handleFormSubmit = (event) => {
    event.preventDefault();

// créer l'objet
const user = {
  nom,
  prenom,
  email,
  motDePasse,
};

//Envoyer le ticket d'incident à votre backend
    axios
      .post("http://localhost:8090/user", user)
      .then((response) => {
        console.log(response);
        console.log("user crée avec succés ");

        // Réinitialiser les champs du formulaire
        setNom("");
        setPrenom("");
        setEmail("");
        setMotDePasse("");
      })
      .catch((error) => {
        console.error("Erreur lors de ka creation du user", error);
      });
  };
  return (

    <div className="container">
  
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center">Formulaire de Contact</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">Nom</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="nom" 
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                  required

                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email</label>
                  <input type="email"
                   className="form-control" 
                   id="email" 
                   value={email}
                   onChange={(event) => setEmail(event.target.value)}
                   required
                   
                   />
                </div>
                <div className="mb-3">
                  <label htmlFor="messageInput"
                   className="form-label">Message</label>
                  <textarea className="form-control" id="messageInput" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;








