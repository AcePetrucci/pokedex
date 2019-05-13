import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonIndex'
})

export class PokemonIndexPipe implements PipeTransform {
  transform(index: number) {
    return '#' + ('00' + index).slice(-3);
  }
}
