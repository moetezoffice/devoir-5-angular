import { Categorie } from './categorie.model';

export interface Plante {
  id: number;
  nom: string;
  categorie: Categorie;
}
