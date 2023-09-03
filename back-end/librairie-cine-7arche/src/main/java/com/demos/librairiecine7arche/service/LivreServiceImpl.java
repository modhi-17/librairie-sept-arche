package com.demos.librairiecine7arche.service;

import com.demos.librairiecine7arche.model.Livre;
import com.demos.librairiecine7arche.repository.LivreRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivreServiceImpl implements LivreService {

    private final LivreRepository livreRepository;

    public LivreServiceImpl(LivreRepository livreRepository) {
        this.livreRepository = livreRepository;
    }

    @Override
    public Livre saveLivre(Livre livre) {
        livreRepository.save(livre);
        return livre;
    }

    @Override
    public List<Livre> findAllLivres() {
        return (List<Livre>) livreRepository.findAll();
    }

    @Override
    public List<Livre> findByAuteurNom(String auteur) {
        return livreRepository.findByAuteurNom(auteur);
    }

    @Override
    public List<Livre> findByGenresNom(String nomGenre) {
        return livreRepository.findByGenresNom(nomGenre);
    }

    @Override
    public List<Livre> findByEditeursNom(String nomEditeur) {
        return livreRepository.findByEditeursNom(nomEditeur);
    }

    @Override
    public List<Livre> findTitleByKeyword(String keyword) {
        return livreRepository.findByTitleByKeyword(keyword);
    }


}
