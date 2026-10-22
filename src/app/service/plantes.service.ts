import { Injectable, signal } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { Plante } from '../models/plante.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlantesService {
  readonly categories: Categorie[] = [
    { id: 1, nom: 'Plantes d’intérieur' },
    { id: 2, nom: 'Succulentes' },
    { id: 3, nom: 'Plantes aromatiques' },
  ];

  readonly plantes = signal<Plante[]>([
    { id: 1, nom: 'Monstera deliciosa', prix: 45, dateCreation: '2025-03-12', categorie: this.categories[0] },
    { id: 2, nom: 'Ficus elastica', prix: 32, dateCreation: '2025-04-08', categorie: this.categories[0] },
    { id: 3, nom: 'Aloe vera', prix: 12, dateCreation: '2025-05-20', categorie: this.categories[1] },
  ]);

  get prochainId(): number {
    return Math.max(0, ...this.plantes().map((plante) => plante.id)) + 1;
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie | undefined {
    return this.categories.find((categorie) => categorie.id === Number(id));
  }

  consulterPlante(id: number): Plante | undefined {
    return this.plantes().find((plante) => plante.id === Number(id));
  }

  rechercherParCategorie(idCategorie: number): Observable<Plante[]> {
    return of(this.plantes().filter((plante) => plante.categorie.id === Number(idCategorie)));
  }

  rechercherParNom(nom: string): Observable<Plante[]> {
    const recherche = nom.trim().toLocaleLowerCase();
    return of(this.plantes().filter((plante) => plante.nom.toLocaleLowerCase().includes(recherche)));
  }

  ajouter(nom: string, prix: number, dateCreation: string, categorieId: number): void {
    const plante = nom.trim();
    const categorie = this.consulterCategorie(categorieId);
    if (plante && categorie && prix >= 0 && dateCreation) {
      this.plantes.update((plantes) => [
        ...plantes,
        { id: this.prochainId, nom: plante, prix, dateCreation, categorie },
      ]);
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
