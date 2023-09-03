package com.demos.librairiecine7arche.service;

import com.demos.librairiecine7arche.model.Article;

import java.util.List;
import java.util.Optional;

public interface ArticleService {

    Iterable<Article> findAllArticles();

    void saveArticle(Article article);

    List<Article> findByKeyword(String keyword);

    Optional<Article> getArticleById(Long id);


}
