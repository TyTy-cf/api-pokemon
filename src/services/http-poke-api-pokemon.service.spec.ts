import { TestBed } from '@angular/core/testing';

import { HttpPokeApiPokemonService } from './http-poke-api-pokemon.service';

describe('HttpPokeApiPokemonService', () => {
  let service: HttpPokeApiPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPokeApiPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
