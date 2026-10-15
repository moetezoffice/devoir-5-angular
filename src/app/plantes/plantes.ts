import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlantesService } from '../plantes.service';
import { Plante } from '../models/plante.model';

@Component({
  selector: 'app-plantes',
  imports: [RouterLink],
  templateUrl: './plantes.html',
  styleUrl: './plantes.css',
})
export class Plantes {
  protected readonly plantesService = inject(PlantesService);

  protected supprimerPlante(plante: Plante): void {
    if (confirm(`Supprimer « ${plante.nom} » de votre collection ?`)) {
      this.plantesService.supprimerPlante(plante);
    }
  }
}
