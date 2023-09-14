import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interefaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Gokú',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegueta',
    power: 5000
  }];

  addCharacter(character: Character): void {
    const newCharacter = { ...character, id: uuid() };

    this.characters.push( newCharacter );
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
