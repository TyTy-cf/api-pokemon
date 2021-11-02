import {PokeApiType} from "./poke-api-type";
import {PokeApiAbility} from "./poke-api-ability";

export interface PokeApiPokemon {
  name: string;
  order: number;
  id: number;
  types: PokeApiType[];
  abilities: PokeApiAbility[];
  sprites: {
    other: {
      'official-artwork': {
        'front_default': string;
      }
    }
  }
}
