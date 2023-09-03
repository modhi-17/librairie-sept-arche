 //Composant Cards
import { Card, Col, Container, Row, Button } from "react-bootstrap";

const Cards = ({ articles, addToCart }) => {
  return (
    <div>
      <Container className="py-5">
        <Row>
          {articles.map((article, index) => (
            <Col md={4} key={index}>
              <Card
                className="mb-3"
                style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={article.image}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>{article.description}</Card.Title>
                  <Card.Text>{article.resume}</Card.Text>
                  <Card.Text>Prix : {article.prixHT} €</Card.Text>
                  <Button
                   variant="secondary"
                    style={{ backgroundColor: "gray" }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "lightgray")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "gray")}
                    onClick={(e) => {
                      e.stopPropagation(); // Arrêter la propagation de l'événement pour empêcher la redirection
                      addToCart(article);
                    
                    }}
                  >
                    Ajouter au panier
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cards; 






// const Cards = () => {
//   // Utilise le state pour stocker les articles et les articles du panier
//   const [articles, setArticles] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Charge les articles lors du montage du composant
//     loadArticles();
//   }, []);

//   const handleCardClick = (articleId) => {
//     // Gérer le clic sur la carte (redirection vers la page de détails de l'article)
//     navigate(`/detailArticle/${articleId}`);

//   };

//   const handleAddToCart = (article) => {
//     //Ajouter l'article au panier
//     const existingItem = cartItems.find((cartItem) => cartItem.id === article.id);

//     if (existingItem) {
//       //Si l'article est déjà présent dans le panier, incrémente la quantité
//       existingItem.quantity += 1;
//       setCartItems([...cartItems]);
//    } else {
//       //Sinon, ajoute l'article au panier avec une quantité initiale de 1
//      setCartItems([...cartItems, { ...article, quantity: 1 }]);
//     }
//    console.log(cartItems);
//    //addToCart(article);
  
//   };

//   const loadArticles = async () => {
//     try {
//       const response = await axios.get("http://localhost:8090/articles");
//       // Met à jour le state avec les données des articles
//       setArticles(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };



//   return (
//     <div>
//       <Container className="py-4">
//         <Row>
//           {articles.map((article, index) => (
//             <Col md={4} key={index}>
//               <div
//                 style={{ textDecoration: "none" }}
//                 onClick={() => handleCardClick(article.id)}
//               >
//                 <Card
//                   className="mb-4"
//                   style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", cursor: "pointer" }}
//                 >
//                   <Card.Img
//                     variant="top"
//                     src={article.image}
//                     style={{ width: "100%", height: "300px", objectFit: "cover" }}
//                   />
//                   <Card.Body style={{ textAlign: "center" }}>
//                     <Card.Title>{article.description}</Card.Title>
//                     <Card.Text>{article.resume}</Card.Text>
//                     <Card.Text>Prix : {article.prixTTC} €</Card.Text>
//                     <Button
//                       variant="secondary"
//                       style={{ backgroundColor: "gray" }}
//                       onMouseOver={(e) => (e.target.style.backgroundColor = "lightgray")}
//                       onMouseOut={(e) => (e.target.style.backgroundColor = "gray")}
//                       onClick={(e) => {
//                         e.stopPropagation(); // Arrêter la propagation de l'événement pour empêcher la redirection
//                         handleAddToCart(article);
//                       }}
//                     >
//                       Ajouter au panier
//                     </Button>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Cards;























