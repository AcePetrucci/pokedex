import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.styl']
})
export class PokemonStatsComponent {

  @Input() types: Array<string>;
  @Input() stats: Array<any>;

  constructor() { }

  getImagePath(type) {
    return `../../../../../assets/images/types/${type}.png`;
  }

}
