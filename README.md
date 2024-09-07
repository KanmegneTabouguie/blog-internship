
---

# Blog - Mon Premier Stage chez Gotham

## Aperçu
Ce projet est un **blog** dans lequel je partage mon expérience lors de mon premier stage chez Gotham. Le blog présente mon parcours, les défis rencontrés et les leçons apprises en travaillant dans une entreprise technologique dynamique. J'ai développé ce projet en utilisant **Bootstrap** pour le design et la réactivité, et j'ai implémenté des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer) pour gérer les articles concernant mon expérience.

## Fonctionnalités Clés
- **Blog Personnel :** Centré sur mon expérience de stage chez Gotham.
- **Tableau de Bord Admin :** Permet de créer, modifier et gérer les articles sur les expériences, projets et réflexions.
- **Accès Public :** Une page principale où les utilisateurs peuvent accéder à mon portfolio et à une section dédiée à mon expérience de stage.


## Pages Importantes
- **Page principale (Portfolio) :** Pour accéder aux détails de mon portfolio et trouver un lien vers la section blog sur mon expérience de stage, rendez-vous sur http://localhost:8000/home.html
- **Section Blog (Expérience de stage) :** Ouvrez votre navigateur et allez sur http://localhost:8000/blog.html pour voir les articles du blog.
- **Admin Panel :** Pour créer, éditer ou supprimer des articles de blog, accédez au tableau de bord administrateur via http://localhost:8000/admin.html

## Technologies Utilisées
- **Frontend :**
  - HTML5 & CSS3
  - JavaScript (avec Fetch API)
  - Bootstrap 4.5
  - FontAwesome
  - Google Fonts
  
- **Backend :**
  - PHP (pour traiter les requêtes POST)
  - JSON (pour stocker les articles)

## Contenu du Blog
- **Introduction à Gotham :** Mes premières impressions en tant que stagiaire chez Gotham.
- **Travail sur des Projets Réels :** Mes contributions à l'amélioration de la plateforme, notamment l'optimisation SEO et l'extraction de données via le web scraping.
- **Outils Utilisés :** Utilisation de **Flask**, **BeautifulSoup**,**react + Tyscript** ,**Laravel**,**Mysql database** pour les differents projets
- **Défis Rencontrés :** Discussion sur les problèmes rencontrés, notamment avec le chargement dynamique des contenus et la gestion des URLs d'images.
- **Résultats Finaux :** Réflexion sur les projets réalisés, comme la génération de pages statiques pour l'optimisation SEO, et sur ma croissance en tant que développeur.

## Installation et Configuration
1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/KanmegneTabouguie/blog-internship.git
   ```
2. **Aller dans le répertoire du projet :**
   ```bash
   cd blog-internship
   ```
3. **Lancer le serveur backend :**
   ```bash
   php -S localhost:8000
   ```

4. **Ouvrir les pages :**
   - **Page principale (Portfolio) :** [http://localhost:8000/home.php]
   - **Section Blog (Expérience de stage) :** [http://localhost:8000/blog.html]
   - **Admin Panel (Gestion des articles) :** [http://localhost:8000/admin.php]

## Utilisation
- **Créer un Article :** Le tableau de bord admin permet d’écrire et de gérer les articles liés à mon expérience de stage.
- **Modifier un Article :** Modifier directement un article via le tableau de bord admin.
- **Supprimer un Article :** Retirer les articles obsolètes ou non désirés.


## Leçons Clés Apprises
- **Web Scraping :** Développement d’un outil automatisé avec **BeautifulSoup** pour extraire des données dynamiques, améliorant mes compétences en résolution de problèmes.
- **Optimisation SEO :** Amélioration de la plateforme de Gotham avec la génération de pages statiques pour un meilleur référencement SEO sur Google.
- **Travail d'Équipe & Communication :** Apprentissage de l'importance de la collaboration et de la communication dans un environnement technologique dynamique.

## Améliorations Futures
- Ajouter une authentification pour sécuriser le tableau de bord admin.
- Migrer de JSON vers une base de données relationnelle (comme MySQL) pour une meilleure gestion des données.
- Ajouter une pagination pour la gestion d’un grand nombre d’articles.

