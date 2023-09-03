package com.demos.librairiecine7arche.model;

import jakarta.persistence.*;

public class LignePanier {
    private Long id;

    private Panier panier;

    private Article article;

    private int quantite;

    // constructeurs,

    public LignePanier() {
    }

    public LignePanier(Long id, Panier panier, Article article, int quantite) {
        this.id = id;
        this.panier = panier;
        this.article = article;
        this.quantite = quantite;
    }

    // getter setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Panier getPanier() {
        return panier;
    }

    public void setPanier(Panier panier) {
        this.panier = panier;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

}
