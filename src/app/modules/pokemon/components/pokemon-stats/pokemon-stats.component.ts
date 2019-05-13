import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonStatsComponent {

  @Input() types: Array<string>;
  @Input() stats: Array<any>;

  constructor() { }

  getImagePath(type: string) {
    return `/assets/images/types/${type}.png`;
  }

}
