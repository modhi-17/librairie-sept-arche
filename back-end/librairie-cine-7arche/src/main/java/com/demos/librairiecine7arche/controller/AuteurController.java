package com.demos.librairiecine7arche.controller;

import com.demos.librairiecine7arche.model.Auteur;
import com.demos.librairiecine7arche.repository.AuteurRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auteurs")
@CrossOrigin
public class AuteurController {

    private final AuteurRepository auteurRepository;


    public AuteurController(AuteurRepository auteurRepository) {
        this.auteurRepository = auteurRepository;
    }

    @PostMapping("/save")
    public Auteur ajouterAuteur(@RequestBody Auteur auteur) {
        return auteurRepository.save(auteur);
    }

}
