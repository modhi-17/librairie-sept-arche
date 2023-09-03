package com.demos.librairiecine7arche.repository;

import com.demos.librairiecine7arche.model.Livre;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LivreRepository extends CrudRepository<Livre, Long> {

    List<Livre> findByAuteurNom(String auteur);
    List<Livre> findByGenresNom(String nomGenre);
    List<Livre> findByEditeursNom(String nomEditeur);
    @Query("SELECT a FROM Livre a WHERE LOWER(a.titre) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Livre> findByTitleByKeyword(@Param("keyword") String keyword);




}