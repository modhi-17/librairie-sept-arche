package com.demos.librairiecine7arche.controller;

import com.demos.librairiecine7arche.model.Editeur;
import com.demos.librairiecine7arche.repository.EditeurRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/editeurs")
public class EditeurController {
    private final EditeurRepository editeurRepository;

    public EditeurController(EditeurRepository editeurRepository) {
        this.editeurRepository = editeurRepository;
    }


    @PostMapping("/save")
    public Editeur ajouterEditeur(@RequestBody Editeur editeur) {
        return editeurRepository.save(editeur);
    }

}
