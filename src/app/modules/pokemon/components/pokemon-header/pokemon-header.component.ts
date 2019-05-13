import { Component, Input } from '@angular/core';

import { formatIndex } from '../../shared/_utils';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.styl']
})
export class PokemonHeaderComponent {

  @Input() index: number;
  @Input() name: string;

  private formatIndex = formatIndex;

  constructor() { }

}
