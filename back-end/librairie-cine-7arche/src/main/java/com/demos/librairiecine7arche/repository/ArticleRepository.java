package com.demos.librairiecine7arche.repository;

import com.demos.librairiecine7arche.model.Article;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArticleRepository extends CrudRepository<Article, Long> {
    @Query("SELECT a FROM Article a WHERE LOWER(a.description) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Article> findByKeyword(@Param("keyword") String keyword);


}