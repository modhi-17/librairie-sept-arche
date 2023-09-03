import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";


const DetailArticle = ({ handleAddToCart}) => {
  //Récupère le paramètre d'URL (l'ID) à l'aide de la méthode useParams() de react-router-dom
  const { id } = useParams();
  // Utilise le state pour stocker les informations de l'article
  const [article, setArticle] = useState(null);

  useEffect(() => {
    loadArticle();
  }, [id]);

  const loadArticle = async () => {
    try {
      const response = await axios.get(`http://localhost:8090/articles/${id}`);
      // Met à jour le state avec les données de l'article
      setArticle(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleAddToCart = () => {
    
  //   // Appelle la fonction addToCart (passée en tant que prop) en lui passant l'article actuel
  //   addToCart(article);

  // };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="py-4">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={article.image} />
            <Card.Body>
              <Card.Title>{article.titre}</Card.Title>
              <Card.Title>{article.auteur.prenom} {article.auteur.nom} </Card.Title>
              <Card.Text>Prix : {article.prixTTC} €</Card.Text>
              <Button variant="secondary" onClick={(e) => {
                      e.stopPropagation(); // Arrêter la propagation de l'événement pour empêcher la redirection
                      handleAddToCart(article);
                    
                    }}
                  >
                Ajouter au panier
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h2>Résumé</h2>
          <p>{article.resume}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailArticle;






















// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import axios from "axios";

// const DetailArticle = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);

//   useEffect(() => {
//     loadArticle();
//   }, [id]);

//   const loadArticle = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8090/articles/${id}`);
//       setArticle(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!article) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container className="py-4">
//       <Row>
//         <Col md={6}>
//           <Card>
//             <Card.Img variant="top" src={article.image} />
//             <Card.Body>
//               <Card.Title>{article.titre}</Card.Title>
//               <Card.Title>{article.auteur.nom}  {article.auteur.prenom}</Card.Title>
//               <Card.Text>Prix : {article.prixTTC} €</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <h2>Resume</h2>
//           <p>{article.resume}</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default DetailArticle;
