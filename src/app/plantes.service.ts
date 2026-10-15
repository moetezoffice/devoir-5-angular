import { Injectable, signal } from '@angular/core';
import { Categorie } from './models/categorie.model';
import { Plante } from './models/plante.model';

@Injectable({ providedIn: 'root' })
export class PlantesService {
  readonly categories: Categorie[] = [
    { id: 1, nom: 'Plantes d’intérieur' },
    { id: 2, nom: 'Succulentes' },
    { id: 3, nom: 'Plantes aromatiques' },
  ];

  readonly plantes = signal<Plante[]>([
    { id: 1, nom: 'Monstera deliciosa', categorie: this.categories[0] },
    { id: 2, nom: 'Ficus elastica', categorie: this.categories[0] },
    { id: 3, nom: 'Aloe vera', categorie: this.categories[1] },
  ]);

  listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie | undefined {
    return this.categories.find((categorie) => categorie.id === Number(id));
  }

  consulterPlante(id: number): Plante | undefined {
    return this.plantes().find((plante) => plante.id === Number(id));
  }

  ajouter(nom: string, categorieId: number): void {
    const plante = nom.trim();
    const categorie = this.consulterCategorie(categorieId);
    if (plante && categorie) {
      const prochainId = Math.max(0, ...this.plantes().map((item) => item.id)) + 1;
      this.plantes.update((plantes) => [...plantes, { id: prochainId, nom: plante, categorie }]);
    }
  }

  supprimerPlante(planteASupprimer: Plante): void {
    this.plantes.update((plantes) => plantes.filter((plante) => plante.id !== planteASupprimer.id));
  }

  modifier(planteModifiee: Plante): void {
    this.plantes.update((plantes) =>
      plantes.map((plante) => (plante.id === planteModifiee.id ? planteModifiee : plante)),
    );
  }
}
