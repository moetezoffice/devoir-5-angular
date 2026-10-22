import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plante } from '../models/plante.model';
import { PlantesService } from '../service/plantes.service';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, DatePipe, SearchFilterPipe],
  templateUrl: './recherche-par-nom.html',
  styleUrl: './recherche-par-nom.css',
})
export class RechercheParNomComponent {
  protected nomRecherche = '';
  protected searchTerm = '';
  protected filtreKeyup = '';
  protected toutesLesPlantes: Plante[];
  protected resultatsApi: Plante[];
  protected resultatsKeyup: Plante[];

  private readonly plantesService = inject(PlantesService);

  constructor() {
    this.toutesLesPlantes = this.plantesService.plantes();
    this.resultatsApi = this.toutesLesPlantes;
    this.resultatsKeyup = this.toutesLesPlantes;
  }

  protected rechercherPlantes(): void {
    this.plantesService.rechercherParNom(this.nomRecherche).subscribe((plantes) => {
      this.resultatsApi = plantes;
    });
  }

  protected onKeyUp(texte: string): void {
    this.filtreKeyup = texte.trim().toLocaleLowerCase();
    this.resultatsKeyup = this.toutesLesPlantes.filter((plante) =>
      plante.nom.toLocaleLowerCase().includes(this.filtreKeyup),
    );
  }
}
