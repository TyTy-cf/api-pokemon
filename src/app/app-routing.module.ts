import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonIndexComponent} from "./pokemon-index/pokemon-index.component";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  { path: '', component: PokemonIndexComponent },
  { path: 'pokemons', component: PokemonIndexComponent },
  { path: 'pokemons/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
