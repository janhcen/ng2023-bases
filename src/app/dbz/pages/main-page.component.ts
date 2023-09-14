import { Component } from '@angular/core';
import { Character } from '../interefaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  deleteCharacterById(id: string) {
    this.dbzService.deleteCharacterById(id);
  }

  addCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }

}


