import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokeApiPokemon} from "../models/interfaces/poke-api-pokemon";
import {sprintf} from "sprintf-js";
import {PokeApiResponse} from "../models/interfaces/poke-api-response";

@Injectable({
  providedIn: 'root'
})
export class HttpPokeApiPokemonService {

  defaultUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  detailedPokemon: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private httpClient: HttpClient) { }

  getAllPokemonByLimit(url: string = this.defaultUrl): Observable<PokeApiResponse> {
    return this.httpClient.get<PokeApiResponse>(url);
  }

  getPokemon(number: string): Observable<PokeApiPokemon> {
    return this.httpClient.get<PokeApiPokemon>(this.detailedPokemon + number);
  }

}
