import React, { useState, useEffect,useCallback } from 'react';
import './HomePage.css';
import NavigationBar from '../../components/public/NavigationBar';
import SearchBar from '../../components/public/SearchBar';
import Footer from '../../components/public/Footer';
import Cards from '../../components/public/Cards';
import Cart from '../../components/public/Cart';
import axios from 'axios';


const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const saveCart = useCallback(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


//  const saveCart = () => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   };

  useEffect(() => {
    
    loadArticles();
    loadCart();
  }, []);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  };

  useEffect(() => {
    // Sauvegarde le panier dans le localStorage à chaque modification du panier
    saveCart();
  }, [cart,saveCart]);


  const loadArticles = async () => {
    try {
      const response = await axios.get('http://localhost:8090/articles');
      // Met à jour le state avec les données des articles
      setArticles(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (data) => {
    const existingItem = cart.find(item => item.id === data.id);
    if (existingItem) {
      // L'article existe déjà dans le panier, on incrémente  la quantité
      const updatedCart = cart.map(item => item.id === data.id ? { ...item, quantite: item.quantite + 1 } : item);
      setCart(updatedCart);
      console.log("Cart after adding:", updatedCart)
    } else {
      // L'article n'existe pas encore dans le panier, on l'ajoute avec une quantité de 1
      setCart([...cart, { ...data, quantite: 1 }]);
      
    }
  };
 
  const handleAddToCart = (article) => {
    addToCart(article);

  };
  
  const handleShow = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="home">
      <div className="header">
        <NavigationBar count={cart.length} handleShow={handleShow} cart={cart}/>
        <SearchBar />
      </div>
      <div className="content">
      </div>
      <div className="cards">
  {showCart ? (
    <Cart cart={cart} setCart={setCart} addToCart={handleAddToCart} />
  ) : (
    <Cards articles={articles} addToCart={handleAddToCart} />
  )}
</div>
      <div className="footer">
        <Footer />
      </div>
    </div>



  );
};

export default HomePage;
