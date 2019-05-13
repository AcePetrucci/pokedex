import { Injectable } from '@angular/core';
import { pokedex } from '../mocks/pokedex';
import { of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  constructor() { }

  public getPokemon() {
    return of(pokedex);
  }

  public getPokemonById(id: number) {
    return this.getPokemon().pipe(
      map(pokemon => pokemon.
        filter(poke => poke.id === id)[0]
      )
    );
  }
}
