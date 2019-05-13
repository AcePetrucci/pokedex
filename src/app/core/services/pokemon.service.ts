import { Injectable } from '@angular/core';
import { pokedex } from '../../shared/mocks/pokedex';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PokemonService {
  constructor() { }

  public getPokemon() {
    return of(pokedex);
  }

  public getPokemonById(id: number) {
    return this.getPokemon().pipe(
      map(pokemon => pokemon.
        find(poke => poke.id === id)
      )
    );
  }
}
