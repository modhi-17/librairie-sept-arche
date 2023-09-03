// import Cards from "../../components/public/Cards";
// import React, { useState,useEffect } from "react";
// import Cart from "../../components/public/Cart";
// import axios from "axios";
// import NavigationBar from "../../components/public/NavigationBar";

// const CartPage = () => {
//   const [article, setArticles] = useState([]);
//   useEffect(() => {
//     // Charge les articles lors du montage du composant
//     loadArticles();
//   }, []);

//   const loadArticles = async () => {
//     try {
//       const response = await axios.get("http://localhost:8090/articles");
//       // Met à jour le state avec les données des articles
//       setArticles(response.data);
//       console.log(response.data);
    
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
// const addToCart = (data) => {
//     setCart([...cart, { data, quantite: 1 }]);
//   };
//   const handleShow = (value) => {
//     setShowCart(value);
//   };
  

//   return (
//     <div>
//        <NavigationBar count={cart.length} handleShow={handleShow} />
//       {showCart ? (
//         <Cart cart={cart} setCart={setCart} />
//       ) : (
//         <Cards article={article} addToCart={addToCart} />
//       )}

//     </div>
//   );
// };

// export default CartPage;


