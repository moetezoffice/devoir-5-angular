import { Categorie } from './categorie.model';

export interface Plante {
  id: number;
  nom: string;
  prix: number;
  dateCreation: string;
  categorie: Categorie;
}
