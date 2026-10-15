import { Routes } from '@angular/router';
import { Plantes } from './plantes/plantes';
import { AddPlante } from './add-plante/add-plante';
import { EditPlante } from './edit-plante/edit-plante';

export const routes: Routes = [
  { path: 'plantes', component: Plantes },
  { path: 'add-plante', component: AddPlante },
  { path: 'edit-plante/:id', component: EditPlante },
  { path: '', redirectTo: 'plantes', pathMatch: 'full' },
  { path: '**', redirectTo: 'plantes' },
];
