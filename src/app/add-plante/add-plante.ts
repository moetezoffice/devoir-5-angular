import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { PlantesService } from '../service/plantes.service';

@Component({
  selector: 'app-add-plante',
  imports: [FormsModule],
  templateUrl: './add-plante.html',
  styleUrl: './add-plante.css',
})
export class AddPlante {
  protected id: number;
  protected nom = '';
  protected prix: number | null = null;
  protected dateCreation = new Date().toISOString().slice(0, 10);
  protected categories: Categorie[];
  protected categorieId = 1;
  private readonly plantesService = inject(PlantesService);
  private readonly router = inject(Router);

  constructor() {
    this.id = this.plantesService.prochainId;
    this.categories = this.plantesService.listeCategories();
  }

  protected ajouterPlante(): void {
    const nom = this.nom.trim();
    if (!nom || this.prix === null) return;

    this.plantesService.ajouter(nom, this.prix, this.dateCreation, this.categorieId);
    void this.router.navigate(['/plantes']);
  }
}
