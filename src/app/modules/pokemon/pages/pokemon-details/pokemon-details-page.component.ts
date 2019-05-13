import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from 'src/app/core/services/pokemon.service';

import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-details-page',
  templateUrl: './pokemon-details-page.component.html',
  styleUrls: ['./pokemon-details-page.component.styl']
})
export class PokemonDetailsPageComponent {

  pokemon$ = this.route.params.pipe(
    map(route => +route.id),
    switchMap(id => this.pokemonService.getPokemonById(id)));

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) { }
}
