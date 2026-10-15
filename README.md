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
- Redirection des URL inconnues vers la collection.

## Adaptation des ateliers 03 et 04

Les exemples « produit » des ateliers deviennent des plantes dans cette application. Le service partagé conserve une collection typée avec un identifiant, un nom et une catégorie pour chaque plante. La page de collection permet de lancer la modification ou la suppression; la route `/edit-plante/:id` transmet l’identifiant au formulaire, qui le garde en lecture seule. Les catégories sont définies dans le service puis réutilisées à l’ajout, à l’affichage et à la modification.

Les plantes et leurs modifications sont conservées dans l’état en mémoire pendant la session courante; elles ne sont pas enregistrées dans une base de données.
