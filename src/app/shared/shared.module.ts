import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PokemonIndexPipe } from './pipes/pokemonIndex.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    PokemonIndexPipe,
  ],
  exports: [
    CommonModule,
    RouterModule,
    PokemonIndexPipe,
  ]
})

export class SharedModule { }
