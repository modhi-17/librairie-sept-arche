

# 7ème-Arche 
Bienvenue dans la documentation du backend de l'application e-commerce de la Librairie 7ème Arche, spécialisée dans la vente d'articles liés au cinéma.

# Prérequis
Avant de commencer,assurez-vous d'avoir installé les éléments suivants :

* Spring Boot (v3.1.1)
* Java 17
* Serveur Apache Tomcat 
* Swagger (v2.0.2)
* MySQL avec Mamp ou XAMP
* Spring Security 6
* JWT (JSON Web Tokens)


# Guide d'Installation

Téléchargez et installez MAMP, XAMPP ou LAMP depuis leur site officiel respectif et suivre la documentation officielle
*  MAMP à l'adresse suivante : https://www.mamp.info/en/downloads/
*  XAMPP à l'adresse suivante: https://www.apachefriends.org/download.html

# Configuration
Le projet utilise un fichier `application.properties` pour la configuration de l'application.
Vous pouvez modifier ce fichier pour adapter la configuration à vos besoins(base de données,port..)

# Port d'écoute de l'application
server.port=8090

# Structure du Projet
Le projet est organisé en différents packages :

controller: Contrôleurs de l'application
exception: Gestion des exceptions
model: Modèles de données
repository: Interfaces de répository
security: Configuration de la sécurité
service: Services de l'application
test: Tests



# Installation
Pour accéder au code source du backend de l'application, suivez ces étapes :

1. Clonez le projet depuis le repository Git sur Github :
git clone https://github.com/modhi-17/librairie-sept-arche.git

2. Naviguez dans le dossier du projet :
cd librairie-sept-arche/back-end/librairie-cine-7arche

# Démarrage de l'Application

Pour démarrer l'application, suivez ces étapes :

1. Configurez le fichier application.properties comme expliqué précédemment.
2. Démarrez MAMP ou XAMPP (assurez-vous que le serveur MySQL soit en cours d'exécution).
3. Compilez et construisez le projet.
4. Exécutez l'application en faisant un clic droit sur la classe principale LibrairieCine7archeApplication et sélectionnez "Run".
5. L'application sera disponible sur le serveur local à l'adresse : http://localhost:8080.
6. Se rendre sur le projet React, suivre les instructions dans la documentation du frontend et démarrer l'application.


# Tests
Les tests sont organisés dans un dossier dédié.

Exécutez les tests en faisant un clic droit sur la classe de test LibrairieCine7archeApplicationTests et sélectionnez "Run".

# Auteurs
Mohamed Dhif

