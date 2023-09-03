import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link ,useNavigate} from "react-router-dom";

const Book = ({ addToCart, article}) => {
  const [livres, setLivres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadLivres();
  }, []);

  const handleCardClick = (livreId) => {
    // Gérer le clic sur la carte (redirection vers la page de détails de l'article)
    // Utilisez l'URL appropriée pour la redirection
    navigate(`/detailArticle/${livreId}`);

  };

  const handleAddToCart = () => {
    addToCart(article);
  };

  const loadLivres = async () => {
    try {
      const response = await axios.get("http://localhost:8090/livres");
      setLivres(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container className="py-4">
        <Row>
          {livres.map((livre, index) => (
            <Col md={4} key={index}>
              <Link to={`/detailArticle/${livre.id}`} style={{ textDecoration: "none" }}>
                <Card
                  className="mb-4"
                  style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", cursor: "pointer" }}
                  onClick={() => handleCardClick(livre.id)}
                >
                  <Card.Img
                    variant="top"
                    src={livre.image}
                    style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column justify-content-center text-center">
                    <Card.Title>{livre.titre}</Card.Title>
                    <Card.Text>{livre.resume}</Card.Text>
                    <Card.Text>Prix : {livre.prixTTC} €</Card.Text>
                    <Button
                   variant="secondary"
                    style={{ backgroundColor: "gray" }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "lightgray")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "gray")}
                    onClick={(e) => {
                      e.stopPropagation(); // Arrêter la propagation de l'événement pour empêcher la redirection
                      handleAddToCart(article);
                    
                    }}
                  >
                      Ajouter au panier
                    </Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Book;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Col, Container, Row, Button } from "react-bootstrap";

// const Book = ({ addToCart, livre }) => {
//   const [livres, setLivres] = useState([]);

//   useEffect(() => {
//     loadLivres();
//   }, []);

//   const handleAddToCart = () => {
//     addToCart(livre);
//   };

//   const loadLivres = async () => {
//     try {
//       const response = await axios.get("http://localhost:8090/livres");
//       setLivres(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Container className="py-4">
//         <Row>
//           {livres.map((livre, index) => (
//             <Col md={4} key={index}>
//               <Card className="mb-4" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
//                 <Card.Img
//                   variant="top"
//                   src={livre.image}
//                   style={{ width: "100%", height: "300px", objectFit: "cover" }}
//                 />
//                 <Card.Body className="d-flex flex-column justify-content-center text-center">
//                   <Card.Title>{livre.titre}</Card.Title>
//                   <Card.Text>{livre.resume}</Card.Text>
//                   <Card.Text>Prix : {livre.prixTTC} €</Card.Text>
//                   <Button
//                     variant="secondary"
//                     style={{ backgroundColor: "gray" }}
//                     onMouseOver={(e) => (e.target.style.backgroundColor = "lightgray")}
//                     onMouseOut={(e) => (e.target.style.backgroundColor = "gray")}
//                     onClick={handleAddToCart}
//                     className="mt-auto"
//                   >
//                     Ajouter au panier
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Book;
