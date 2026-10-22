import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../models/categorie.model';
import { Plante } from '../models/plante.model';
import { PlantesService } from '../service/plantes.service';

@Component({
  selector: 'app-recherche-par-categorie',
  imports: [FormsModule, DatePipe],
  templateUrl: './recherche-par-categorie.html',
  styleUrl: './recherche-par-categorie.css',
})
export class RechercheParCategorieComponent {
  protected categories: Categorie[];
  protected plantes: Plante[] = [];
  protected idCategorie: number | null = null;

  private readonly plantesService = inject(PlantesService);

  constructor() {
    this.categories = this.plantesService.listeCategories();
  }

  protected onChange(): void {
    if (this.idCategorie === null) {
      this.plantes = [];
      return;
    }

    this.plantesService.rechercherParCategorie(this.idCategorie).subscribe((plantes) => {
      this.plantes = plantes;
    });
  }
}
