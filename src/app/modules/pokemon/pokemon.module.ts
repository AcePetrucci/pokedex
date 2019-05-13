import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonWrapperComponent } from './components/pokemon-wrapper/pokemon-wrapper.component';
import { PokemonHeaderComponent } from './components/pokemon-header/pokemon-header.component';
import { PokemonStatsComponent } from './components/pokemon-stats/pokemon-stats.component';
import { PokemonDetailsPageComponent } from './pages/pokemon-details/pokemon-details-page.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonWrapperComponent,
    PokemonHeaderComponent,
    PokemonStatsComponent,
    PokemonDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
})
export class PokemonModule { }
