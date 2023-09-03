import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;























// import React, { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [nom, setNom] = useState("");
//   const [email, setEmail] = useState("");
//   const [prenom, setPrenom] = useState("");
//   const [motDePasse, setMotDePasse] = useState("");
//   const [rue, setRue] = useState("");
//   const [ville, setVille] = useState("");
//   const [codePostal, setCodePostal] = useState("");

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Créer l'objet adresse
//     const adresse = {
//       rue,
//       ville,
//       codePostal,
//     };
//     // créer l'objet
//     const user = {
//       nom,
//       prenom,
//       email,
//       motDePasse,
//       adresse,
//     };

//     //Envoyer le ticket d'incident à votre backend
//     axios
//       .post("http://localhost:8090/user/save", user)
//       .then((response) => {
//         console.log(response);
//         console.log("user crée avec succés ");

//         // Réinitialiser les champs du formulaire
//         setNom("");
//         setPrenom("");
//         setEmail("");
//         setMotDePasse("");
//         setRue("");
//         setVille("");
//         setCodePostal("");

//       })
//       .catch((error) => {
//         console.error("Erreur lors de la creation du user", error);
//       });
//   };

//   return (
//     <div className="container">
//       <h2>Créer un compte</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label htmlFor="firstName">Prénom :</label>
//             <input
//               type="text"
//               className="form-control"
//               name="firstName"
//               id="firstName"
//               value={prenom}
//               onChange={(e) => setPrenom(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group col-md-6">
//             <label htmlFor="lastName">Nom :</label>
//             <input
//               type="text"
//               placeholder="Votre nom"
//               className="form-control"
//               name="lastName"
//               id="lastName"
//               value={nom}
//               onChange={(e) => setNom(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email :</label>
//           <input
//             type="email"
//             className="form-control"
//             name="mail"
//             id="mail"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Mot de passe :</label>
//           <input
//             type="password"
//             className="form-control"
//             name="motDePasse"
//             id="motDePasse"
//             value={motDePasse}
//             onChange={(e) => setMotDePasse(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="adress">Adresse:</label>
//           <input
//             type="text"
//             className="form-control"
//             name="rue"
//             id="rue"
//             value={rue}
//             onChange={(e) => setRue(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="codePostal">Code postal :</label>
//           <input
//             type="number"
//             className="form-control"
//             name="codePostal"
//             id="codePostal"
//             value={codePostal}
//             onChange={(e) => setCodePostal(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="ville">Ville :</label>
//           <input
//             type="text"
//             className="form-control"
//             name="ville"
//             id="ville"
//             value={ville}
//             onChange={(e) => setVille(e.target.value)}
//             required
//           />
//         </div>
       
//         <button type="submit" className="btn btn-primary">
//           Créer un compte
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// // const Register = () => {
// //   const [user, setUser] = useState({

// //   });

// //   const handleInputChange = event => {
// //     const { name, value } = event.target;
// //     setUser({ ...user, [name]: value });
// //   };

// //   const handleSubmit = event => {
// //     event.preventDefault();
// //     axios.post('http://localhost:8090/user', user)
// //       .then(response => {
// //         console.log(response.data);
// //       })
// //       .catch(error => {
// //         console.error(error);
// //       });
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Créer un compte</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-row">
// //           <div className="form-group col-md-6">
// //             <label htmlFor="firstName">Prénom :</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="firstName"
// //               id="firstName"
// //               value={user.firstName}
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           <div className="form-group col-md-6">
// //             <label htmlFor="lastName">Nom :</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               name="lastName"
// //               id="lastName"
// //               value={user.lastName}
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="email">Email :</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             name="email"
// //             id="email"
// //             value={user.email}
// //             onChange={handleInputChange}
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="password">Mot de passe :</label>
// //           <input
// //             type="password"
// //             className="form-control"
// //             name="password"
// //             id="password"
// //             value={user.password}
// //             onChange={handleInputChange}
// //           />
// //         </div>
// //         <button type="submit" className="btn btn-primary">Créer un compte</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Register;
