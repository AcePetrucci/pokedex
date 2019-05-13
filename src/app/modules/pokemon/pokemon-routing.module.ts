import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { PokemonDetailsPageComponent } from './pages/pokemon-details/pokemon-details-page.component';

export const pokemonRoutes: Routes = [
  {
    path: '', component: PokemonComponent,
    children: [
      { path: '', redirectTo: 'details/1', pathMatch: 'full' },
      { path: 'details/:id', component: PokemonDetailsPageComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PokemonRoutingModule { }
