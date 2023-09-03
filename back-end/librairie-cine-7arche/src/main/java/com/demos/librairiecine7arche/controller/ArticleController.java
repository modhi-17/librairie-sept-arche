package com.demos.librairiecine7arche.controller;

import com.demos.librairiecine7arche.exception.ArticleNotFound;
import com.demos.librairiecine7arche.model.Article;
import com.demos.librairiecine7arche.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/articles")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @GetMapping
    public Iterable<Article> getAllArticles() {
        return articleService.findAllArticles();
    }

    @PostMapping("/save")
    public void addArticle(@RequestBody Article article) {
        articleService.saveArticle(article);
    }

    @GetMapping("/search/description")
    public List<Article> searchArticles(@RequestParam String keyword) {
        return articleService.findByKeyword(keyword);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable Long id) throws ArticleNotFound {
        return articleService.getArticleById(id)
                .map(p -> ResponseEntity.ok().body(p))
                .orElseThrow(() -> new ArticleNotFound("Article non trouvée avec l'ID: " + id));
    }


}
