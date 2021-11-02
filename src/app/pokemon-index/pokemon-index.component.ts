import { Component, OnInit } from '@angular/core';
import {HttpPokeApiPokemonService} from "../../services/http-poke-api-pokemon.service";
import {PokeApiResponse} from "../../models/interfaces/poke-api-response";
import {HttpClient} from "@angular/common/http";
import {PokeApiPokemon} from "../../models/interfaces/poke-api-pokemon";

@Component({
  selector: 'app-pokemon-index',
  templateUrl: './pokemon-index.component.html',
  styleUrls: ['./pokemon-index.component.scss']
})
export class PokemonIndexComponent implements OnInit {

  limit: number = 0;
  pokeApiResponse!: PokeApiResponse;
  arrayPokemon: Array<PokeApiPokemon> = [];

  constructor(
    private httpPokeApiPokemonService: HttpPokeApiPokemonService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadPokemons(this.httpPokeApiPokemonService.defaultUrl, 0);
  }

  loadPokemons(url: string, limit: number): void {
    this.limit += limit;
    this.httpPokeApiPokemonService.getAllPokemonByLimit(url).subscribe((pokeApiResponse) => {
      this.pokeApiResponse = pokeApiResponse;
      for (const element of pokeApiResponse.results) {
        this.httpClient.get<PokeApiPokemon>(element.url).subscribe((pokeApiPkmn) => {
          if (this.arrayPokemon.length <= (this.limit + 20)) {
            this.arrayPokemon.push(pokeApiPkmn);
            this.arrayPokemon.sort((a, b) =>
              a.id - b.id
            )
          }
        })
      }
    });
  }

}
