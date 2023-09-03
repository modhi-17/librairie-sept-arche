package com.demos.librairiecine7arche.repository;

import com.demos.librairiecine7arche.model.Commande;
import org.springframework.data.repository.CrudRepository;

public interface CommandeRepository extends CrudRepository<Commande, Long> {

    Commande findByNumComm(String numComm);

}