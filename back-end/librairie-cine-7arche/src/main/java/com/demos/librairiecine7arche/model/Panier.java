package com.demos.librairiecine7arche.model;

import java.util.List;

public class Panier {
        private Long id;
        private List<LignePanier> lignePaniers;

        public Panier() {
        }

    public Panier(Long id, List<LignePanier> lignePaniers) {
        this.id = id;
        this.lignePaniers = lignePaniers;
    }

    public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public List<LignePanier> getLignePaniers() {
            return lignePaniers;
        }

        public void setLignePaniers(List<LignePanier> lignePaniers) {
            this.lignePaniers = lignePaniers;
        }
    }

