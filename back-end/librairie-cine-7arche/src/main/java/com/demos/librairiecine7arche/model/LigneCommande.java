package com.demos.librairiecine7arche.model;

import jakarta.persistence.*;

@Entity
@Table(name = "lignes_commande")
public class LigneCommande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "quantite")
    private int quantite;

    @ManyToOne
    @JoinColumn(name = "commande_id")
    private Commande commande;

    @ManyToOne  //oneToOne
    @JoinColumn(name = "article_id")
    private Article article;

    //constructeur
    public LigneCommande() {

    }

    public LigneCommande(Long id, int quantite, Commande commande, Article article) {
        this.id = id;
        this.quantite = quantite;
        this.commande = commande;
        this.article = article;
    }

    // getters et setters


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public Commande getCommande() {
        return commande;
    }

    public void setCommande(Commande commande) {
        this.commande = commande;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }


}
