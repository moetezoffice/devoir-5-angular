import { Routes } from '@angular/router';
import { Plantes } from './plantes/plantes';
import { AddPlante } from './add-plante/add-plante';
import { EditPlante } from './edit-plante/edit-plante';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
  { path: 'plantes', component: Plantes },
  { path: 'add-plante', component: AddPlante },
  { path: 'edit-plante/:id', component: EditPlante },
  { path: 'rechercheParCategorie', component: RechercheParCategorieComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: '', redirectTo: 'plantes', pathMatch: 'full' },
  { path: '**', redirectTo: 'plantes' },
];
