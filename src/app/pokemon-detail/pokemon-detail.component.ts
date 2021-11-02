import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpPokeApiPokemonService} from "../../services/http-poke-api-pokemon.service";
import {PokeApiPokemon} from "../../models/interfaces/poke-api-pokemon";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon!: PokeApiPokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpPokeApi: HttpPokeApiPokemonService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param.id);
      this.httpPokeApi.getPokemon(param.id).subscribe((pkmn) => {
        this.pokemon = pkmn;
      })
    });
  }

}
