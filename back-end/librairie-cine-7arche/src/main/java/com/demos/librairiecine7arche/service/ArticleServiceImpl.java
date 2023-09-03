package com.demos.librairiecine7arche.service;

import com.demos.librairiecine7arche.model.Article;
import com.demos.librairiecine7arche.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleServiceImpl implements ArticleService {
    private final ArticleRepository articleRepository;

    public ArticleServiceImpl(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public List<Article> findAllArticles() {
        return (List<Article>) articleRepository.findAll();
    }



    @Override
    public void saveArticle(Article article) {
        articleRepository.save(article);

    }

    @Override
    public List<Article> findByKeyword(String keyword) {
        return articleRepository.findByKeyword(keyword);
    }

    /**
     * Récupère un article par son identifiant.
     *
     * @param id L'identifiant de l'article à rechercher.
     * @return Un objet Optional contenant l'article trouvé ou un Optional vide si aucun article correspondant à l'identifiant n'est trouvé.
     */
    @Override
    public Optional<Article> getArticleById(Long id) {
        List<Article> articles = new ArrayList<>();
        //récupère tous les articles ajoute chaque article à la liste articles en utilisant forEach().
        articleRepository.findAll().forEach(articles::add);
        return articles.stream()
                .filter(a -> a.getId().equals(id))
                .findFirst();
    }

}
