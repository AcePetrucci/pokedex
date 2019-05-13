import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { formatIndex } from '../../shared/_utils';

@Component({
  selector: 'app-pokemon-wrapper',
  templateUrl: './pokemon-wrapper.component.html',
  styleUrls: ['./pokemon-wrapper.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonWrapperComponent {

  @Input() name: string;
  @Input() weebName: string;
  @Input() index: number;

  backgroundColor: any;

  constructor() { }

  getBackgroundColor() {
    const colorThief = new (<any>window).ColorThief(); // tslint:disable-line
    this.backgroundColor = colorThief.getColor(document.querySelector('#pokemon-art'));
  }

  get getImageName() {
    return `${formatIndex(this.index)}${this.name}`;
  }

  get nextPokemon() {
    return this.index + 1;
  }

  get previousPokemon() {
    return this.index - 1;
  }
}
