import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = ({ cart, setCart, addToCart }) => {
  const navigate = useNavigate();

  const decrementQuantity = (item) => {
    if (item.quantite === 1) {
      removeItem(item);
    } else {
      const updatedCart = cart.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantite: cartItem.quantite - 1 } : cartItem);
      setCart(updatedCart);
    }
  };

  const removeItem = (item) => {
    const updatedCartItems = cart.filter(cartItem => cartItem.id !== item.id);
    setCart(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.prixHT * item.quantite;
    }
    return totalPrice.toFixed(2);
  };
//  générer un code unique aléatoire avec 6 chiffre
const generateUniqueCode = () => {
  const randomNumComm = Math.floor(Math.random() * 10000000);
  return `${randomNumComm}`;
};

  const handleGoToLogin = () => {
    
    // Envoie la commande au backend
    const commande = {
      numComm: generateUniqueCode(), 
      dateComm: new Date(),
      lignesCommande: cart.map(item => ({
        quantite: item.quantite,
        article: item 
        //article: { id: item.id }
      }))
    };

    

    axios.post('http://localhost:8090/commandes/save', commande)
      .then(response => {
        
        console.log('Commande créée:', response.data,commande);
        // Réinitialiser le panier après avoir réussi à créer la commande
        setCart([]);
      
        navigate('/');
      })
      .catch(error => {
    
        console.error('Erreur lors de la création de la commande:', error);
      });
  };
  return (
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <h2>Panier</h2>
              {cart.length === 0 ? (
                <p>Aucun article dans le panier</p>
              ) : (
                <>
                  {cart.map((item,index) => (
                    <div key={index} className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src={item.image} alt={item.description} className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{item.description}</h5>
                            <p className="card-text">Prix : {item.prixHT} €</p>
                            <div className="d-flex align-items-center">
                              <Button variant="primary" onClick={() => decrementQuantity(item)}>
                                -
                              </Button>
                              <span className="mx-2">{item.quantite}</span>
                              <Button variant="primary" onClick={() => addToCart(item)}>
                                +
                              </Button>
                              <Button variant="danger" onClick={() => removeItem(item)}>
                                <i className="fas fa-trash"></i>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <h4 className="mt-4">Total : {calculateTotalPrice()} €</h4>
                  <Button variant="primary" onClick={handleGoToLogin}>
                    Valider la commande
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    };
    
    export default Cart;
  













