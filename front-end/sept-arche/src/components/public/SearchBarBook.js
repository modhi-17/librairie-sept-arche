import React, { useState, useEffect } from "react";
import axios from "axios";


const SearchBarBook = (handleAddToCart) => {
    const [articles, setArticles] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchArticles = async () => {
        setIsLoading(true);
        try {
          const articlesResult = await axios.get(
            `http://localhost:8090/livres/search/titre?keyword=${keyword}`
            //`http://localhost:8090/livres/search?keyword=${keyword}`

          );
          setArticles(articlesResult.data);
        } catch (error) {
          setError(error);
        }
        setIsLoading(false);
      };
  
      if (keyword) {
        fetchArticles();
      }
    }, [keyword]);
  
    const handleSearch = (e) => {
      setKeyword(e.target.value);
    };
  
    if (isLoading) {
      return <p>Chargement...</p>;
    }
  
    if (error) {
      return <p>Une erreur s'est produite</p>;
    }
  
    return (
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-lg-6 col-md-8">
            <div className="search-container">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Recherche par titre,auteur,genre,editeur....."
                value={keyword}
                onChange={handleSearch}
                autoFocus
              />

            </div>
          </div>
        </div>
  
        <div className="row mt-3">
          {articles.map((article) => (
            <div className="col-md-4" key={article.id}>
              <div className="card mb-4 shadow-sm">
                <img
                  src={process.env.PUBLIC_URL + article.image}
                  alt={article.titre}
                />
                <div className="card-body">
                  <p className="card-text">{article.titre}</p>
                  <h5>Résume</h5>
                  <p className="card-text">{article.resume}</p>
                  <p className="card-text">Prix : {article.prixHT} €</p>
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleAddToCart(article)}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
 
  export default SearchBarBook;
