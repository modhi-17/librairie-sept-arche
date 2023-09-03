package com.demos.librairiecine7arche.service;

import com.demos.librairiecine7arche.model.Commande;





public interface CommandeService {

    Commande createCommande(Commande commande);
    Iterable<Commande> getAllCommandes();
    Commande findById(Long id);
    Commande findByRef(String ref);

}
