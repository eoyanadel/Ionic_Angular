import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../Models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false  /* ejectuar pipe desde cualquier componente */
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[] {

    return listas.filter(lista => lista.terminada === completada);
  }

}
