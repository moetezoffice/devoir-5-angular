import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PlantesService } from '../plantes.service';
import { Categorie } from '../models/categorie.model';

@Component({
  selector: 'app-add-plante',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-plante.html',
  styleUrl: './add-plante.css',
})
export class AddPlante {
  protected nom = '';
  protected categories: Categorie[];
  protected categorieId = 1;
  private readonly plantesService = inject(PlantesService);
  private readonly router = inject(Router);

  constructor() {
    this.categories = this.plantesService.listeCategories();
  }

  protected ajouterPlante(): void {
    const nom = this.nom.trim();
    if (!nom) return;

    this.plantesService.ajouter(nom, this.categorieId);
    void this.router.navigate(['/plantes']);
  }
}
