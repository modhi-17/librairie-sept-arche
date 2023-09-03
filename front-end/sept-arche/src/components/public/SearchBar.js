import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ addToCart }) => {
  const [articles, setArticles] = useState([]);// Stocke les articles récupérés
  const [keyword, setKeyword] = useState("");// Stocke le mot-clé de recherche saisi par l'utilisateur
  const [isLoading, setIsLoading] = useState(false);// Hook  react-router-dom pour la navigation

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //Effectue la recherche lorsque le mot-clé change
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(
          `http://localhost:8090/articles/search/description?keyword=${keyword}`
        );
        setArticles(result.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    if (keyword) {
      fetchArticles();// Lance la recherche uniquement si un mot-clé est saisi
    }
  }, [keyword]);

  //Gère le changement du mot-clé de recherche
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  //Ajoute un article au panier lorsqu'il est cliqué
  const handleCardClick = (articleId) => {
    navigate(`/detailArticle/${articleId}`);
  };

  const handleAddToCart = (article) => {
    addToCart(article);
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
              placeholder="Recherche par articles....."
              value={keyword}
              onChange={handleSearch}
              autoFocus
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        {articles.map((article) => (
          <div
            className="col-md-4"
            key={article.id}
            onClick={() => handleCardClick(article.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="card mb-4 shadow-sm">
              <img
                src={process.env.PUBLIC_URL + article.image}
                alt={article.description}
              />
              <div className="card-body">
                <p className="card-text">{article.titre}</p>
                <p className="card-text">{article.resume}</p>
                <p className="card-text">Prix : {article.prixTTC} €</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleAddToCart(article)}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;


























