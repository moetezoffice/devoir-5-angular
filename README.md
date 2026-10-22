# MesPlantes

Petit atelier Angular de gestion d’une collection de plantes, adapté de l’atelier « MesProduits ».

## Lancer le projet

```bash
npm install
npm start
```

Ouvrez ensuite <http://localhost:4200/>. La page d’accueil redirige vers `/plantes`.

## Fonctionnalités

- Navigation Bootstrap entre la collection et les formulaires.
- Affichage des plantes et de leur catégorie avec la syntaxe Angular `@for`.
- Ajout d’une plante en choisissant sa catégorie.
- Modification du nom et de la catégorie depuis une route qui contient l’identifiant de la plante.
- Suppression d’une plante après confirmation.
- Recherche de plantes par catégorie et par nom.
- Démonstration du filtrage à la frappe et avec un pipe Angular.
- Redirection des URL inconnues vers la collection.

## Adaptation des ateliers 03 et 04

Les exemples « produit » des ateliers deviennent des plantes dans cette application. La collection conserve un identifiant, un nom, un prix, une date de création et une catégorie pour chaque plante. La page de collection permet de lancer la modification ou la suppression; la route `/edit-plante/:id` transmet l’identifiant au formulaire, qui le garde en lecture seule. Les catégories sont définies dans le service puis réutilisées à l’ajout, à l’affichage, à la modification et à la recherche.

L’atelier 07 est adapté aux données locales du projet : la recherche par catégorie, la recherche par nom et les deux filtres dynamiques travaillent sur la collection partagée. Le service renvoie des `Observable` pour illustrer la forme de l’atelier, mais aucune API Spring Boot n’est connectée dans ce projet. Le pipe `searchFilter` filtre la liste directement dans le template.

### Présentation courte

« MesPlantes est une application Angular de gestion d’une collection de plantes. Un service partagé garde les plantes et leurs catégories en mémoire. On peut ajouter, modifier et supprimer une plante, puis rechercher la collection par catégorie ou par nom. La recherche par nom montre trois techniques : un appel au service, un filtrage à la frappe et un pipe Angular. Les données restent en mémoire; une API Spring Boot et une base de données pourraient être ajoutées pour les sauvegarder durablement. »

Les plantes et leurs modifications sont conservées dans l’état en mémoire pendant la session courante; elles ne sont pas enregistrées dans une base de données.
