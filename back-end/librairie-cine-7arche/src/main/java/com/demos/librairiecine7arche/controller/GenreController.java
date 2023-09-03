package com.demos.librairiecine7arche.controller;

import com.demos.librairiecine7arche.model.Genre;
import com.demos.librairiecine7arche.repository.GenreRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/genres")
@CrossOrigin
public class GenreController {

    private final GenreRepository genreRepository;

    public GenreController(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }


    @PostMapping("/save")
    public Genre ajouterGenre(@RequestBody Genre genre) {
        return genreRepository.save(genre);
    }

}
