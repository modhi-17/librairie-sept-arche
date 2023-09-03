package com.demos.librairiecine7arche.controller;

import com.demos.librairiecine7arche.exception.ErrorResponse;
import com.demos.librairiecine7arche.exception.StockException;
import com.demos.librairiecine7arche.model.Commande;
import com.demos.librairiecine7arche.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/commandes")
public class CommandeController {

    @Autowired
    private final CommandeService commandeService;

    public CommandeController(CommandeService commandeService) {
        this.commandeService = commandeService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Commande>> getAllCommandes() {
        Iterable<Commande> commandes = commandeService.getAllCommandes();
        return new ResponseEntity<>(commandes, HttpStatus.OK);
    }

    /**
     * Crée une nouvelle commande à partir des données de la requête.
     *
     * @param commande L'objet Commande reçu en tant que corps de la requête.
     * @return Une réponse HTTP avec le code de statut et le corps de la réponse contenant l'id de la commande créée ou une erreur en cas d'exception.
     */
    @PostMapping("/save")
    public ResponseEntity<?> ajoutCommande(@RequestBody Commande commande) {
        try {
            // créer une nouvelle commande avec l'objet commande reçu en paramètre
            Commande createdCommande = commandeService.createCommande(commande);

            // on s'assure  que l'identifiant de la commande est non null
            if (createdCommande.getId() == null) {
                throw new IllegalStateException("L'identifiant de la commande n'a pas été généré.");
            }

            // Retourne une réponse HTTP avec le code de statut 200 OK et le corps de la réponse contenant l'identifiant de la commande créée
            return ResponseEntity.ok(createdCommande.getId());
        } catch (StockException e) {
            // Crée un objet ErrorResponse avec le code d'erreur et le message de l'exception
            ErrorResponse errorResponse = new ErrorResponse(e.getErrorCode(), e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        } catch (Exception e) {
            System.out.println(e);
            // Retourne une réponse HTTP avec le code de statut 500 Internal Server Error et un corps vide
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
