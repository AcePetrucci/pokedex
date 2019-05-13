import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonHeaderComponent {

  @Input() index: number;
  @Input() name: string;

  constructor() { }

}
