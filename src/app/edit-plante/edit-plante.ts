import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { Plante } from '../models/plante.model';
import { PlantesService } from '../plantes.service';

@Component({
  selector: 'app-edit-plante',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-plante.html',
  styleUrl: './edit-plante.css',
})
export class EditPlante {
  protected categories: Categorie[];
  protected plante?: Plante;
  protected categorieId = 1;

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly plantesService = inject(PlantesService);

  constructor() {
    this.categories = this.plantesService.listeCategories();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.plante = this.plantesService.consulterPlante(id);

    if (!this.plante) {
      void this.router.navigate(['/plantes']);
      return;
    }

    this.categorieId = this.plante.categorie.id;
  }

  protected modifierPlante(): void {
    if (!this.plante) return;

    const categorie = this.plantesService.consulterCategorie(this.categorieId);
    const nom = this.plante.nom.trim();
    if (!categorie || !nom) return;

    this.plantesService.modifier({ ...this.plante, nom, categorie });
    void this.router.navigate(['/plantes']);
  }
}
