import {PokeApiResult} from "./poke-api-results";

export interface PokeApiResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeApiResult[];
}
