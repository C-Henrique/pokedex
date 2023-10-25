import { Component } from '@angular/core';
import { Pokemon } from '../../_model/Pokemon';
import { Type } from '../../_model/Type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  public pokemons: Pokemon[] = [
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      name: 'Bulbassalto',
      number: 1,
      types: [Type.Grass, Type.Poison],
    },
    {
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      name: 'Bulbassalto',
      number: 1,
      types: [Type.Grass, Type.Poison],
    },
  ];
}

