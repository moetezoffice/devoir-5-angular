import { Pipe, PipeTransform } from '@angular/core';
import { Plante } from '../models/plante.model';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(plantes: readonly Plante[] | null | undefined, filterText: string | null | undefined): Plante[] {
    const recherche = (filterText ?? '').trim().toLocaleLowerCase();
    return (plantes ?? []).filter((plante) => plante.nom.toLocaleLowerCase().includes(recherche));
  }
}
