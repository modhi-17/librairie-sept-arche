package com.demos.librairiecine7arche.service;

import com.demos.librairiecine7arche.exception.StockException;
import com.demos.librairiecine7arche.model.Article;
import com.demos.librairiecine7arche.model.Commande;
import com.demos.librairiecine7arche.model.LigneCommande;
import com.demos.librairiecine7arche.model.Stock;
import com.demos.librairiecine7arche.repository.CommandeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Implémentation du service de gestion des commandes.
 */
@Service
public class CommandeServiceImpl implements CommandeService {
    private static final Logger logger = LoggerFactory.getLogger(CommandeService.class);
    private final CommandeRepository commandeRepository;
    private final ArticleService articleService;

    /**
     * Constructeur de la classe.
     *
     * @param commandeRepository Le référentiel de commandes.
     * @param articleService     Le service de gestion des articles.
     */

    public CommandeServiceImpl(CommandeRepository commandeRepository, ArticleService articleService) {
        this.commandeRepository = commandeRepository;
        this.articleService = articleService;
    }

    /**
     * Crée une nouvelle commande en vérifiant le stock des articles.
     *
     * @param commande La commande à créer.
     * @return La commande créée.
     * @throws StockException Si le stock est insuffisant pour l'un des articles de la commande.
     */
    @Override
    @Transactional
    public Commande createCommande(Commande commande) {
        // parcours chaque LigneCommande dans la liste de lignes de commande de l'objet commande
        for (LigneCommande ligneCommande : commande.getLignesCommande()) {
            Article article = ligneCommande.getArticle();
            Stock stock = article.getStock();

            if (!article.isNumeric()) {
                if (stock != null) {
                    int quantiteCommandee = ligneCommande.getQuantite();
                    int stockDisponible = stock.getNombre();
                    logger.debug("Article: {} - Stock disponible: {} - Quantité commandée: {}", article.getDescription(), stockDisponible, quantiteCommandee);
                    if (stockDisponible >= quantiteCommandee) {
                        // Met à jour le stock en décrémentant la quantité commandée
                        stock.decremente(quantiteCommandee);
                        logger.debug("Décrémentation du stock pour l'article: {} - Stock restant: {}", article.getDescription(), stock.getNombre());
                    } else {
                        throw new StockException("Stock insuffisant pour l'article: " + article.getDescription(), "Stock insuffisant");
                    }
                    // Sauvegarder l'article mis à jour dans la base de données
                    articleService.saveArticle(article);
                    logger.debug("mise a jour du stock pour l'article: {} - Stock actuel: {}", article.getDescription(), stock.getNombre());
                } else {
                    throw new StockException("Stock indisponible pour l'article: " + article.getDescription(), "Stock indisponible");
                }
            }
            // Établir l'association
            ligneCommande.setCommande(commande);
        }
        // Enregistre la commande
        return commandeRepository.save(commande);

    }


    @Override
    public Iterable<Commande> getAllCommandes() {
        return commandeRepository.findAll();
    }

    @Override
    public Commande findById(Long id) {
        Optional<Commande> optionalCommande = commandeRepository.findById(id);
        return optionalCommande.orElse(null);
    }

    @Override
    public Commande findByRef(String ref) {
        return commandeRepository.findByNumComm(ref);
    }


}
