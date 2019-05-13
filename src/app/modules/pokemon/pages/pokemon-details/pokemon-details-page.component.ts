import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from 'src/app/shared/services/pokemon.service';

import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pokemon-details-page',
  templateUrl: './pokemon-details-page.component.html',
  styleUrls: ['./pokemon-details-page.component.styl']
})
export class PokemonDetailsPageComponent implements OnInit, OnDestroy {

  private _destroy$: Subject<boolean> = new Subject<boolean>();
  pokemon$: any;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      map(route => parseInt(route.id, 10)),
      switchMap(id => this.pokemonService.getPokemonById(id)),
      takeUntil(this._destroy$)
    ).subscribe(pokemon => this.pokemon$ = pokemon);
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }
}
