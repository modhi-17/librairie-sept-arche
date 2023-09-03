package com.demos.librairiecine7arche.controller;

import com.demos.librairiecine7arche.model.Livre;
import com.demos.librairiecine7arche.service.LivreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/livres")
public class LivreController {
    @Autowired
    private LivreService livreService;

    @GetMapping
    public Iterable<Livre> getAllArticles() {
        return livreService.findAllLivres();
    }

    @PostMapping("/save")
    public Livre save(@RequestBody Livre livre) {
        return livreService.saveLivre(livre);
    }

    @GetMapping("/search/auteur")
    public List<Livre> searchLivresbyAuteur(@RequestParam("auteur") String auteur) {
        return livreService.findByAuteurNom(auteur);

    }

    @GetMapping("/genre")
    public List<Livre> searchByGenre(@RequestParam("genre") String genre) {
        return livreService.findByGenresNom(genre);
    }

    @GetMapping("/search/titre")
    public List<Livre> searchByTitre(@RequestParam String keyword) {
        return livreService.findTitleByKeyword(keyword);
    }


}
