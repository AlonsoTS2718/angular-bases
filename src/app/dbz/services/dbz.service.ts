import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';


@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Koku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
    {
      id: uuid(),
      name: 'Picoro',
      power: 3500,
    },
  ];

  constructor() {}

  public jiji: string = 'jiji';

   addCharacter(character: Character): void {
    const newCharacter: Character = {id:uuid(), ...character}
    this.characters.push(newCharacter);
    console.log(newCharacter)
  }

//   console.log('indice main', index);
//   this.characters.splice(index, 1);
   deleteCharacterById(id: string) {
    this.characters = this.characters.filter(characters => characters.id !== id);
  }
}
