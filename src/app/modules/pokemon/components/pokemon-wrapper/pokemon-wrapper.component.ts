import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { formatIndex } from '../../shared/_utils';

@Component({
  selector: 'app-pokemon-wrapper',
  templateUrl: './pokemon-wrapper.component.html',
  styleUrls: ['./pokemon-wrapper.component.styl']
})
export class PokemonWrapperComponent implements OnInit, OnDestroy {

  @Input() name: string;
  @Input() weebName: string;
  @Input() index: number;

  @Output() pokeNavigated = new EventEmitter();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  backgroundColor: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getBackgroundColor();

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(ev => {
      if (ev instanceof NavigationEnd) { this.getBackgroundColor(); }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getImageName() {
    return `${formatIndex(this.index)}${this.name}`;
  }

  getBackgroundColor() {
    setTimeout(() => {
      const colorThief = new (<any>window).ColorThief(); // tslint:disable-line
      this.backgroundColor = colorThief.getColor(document.querySelector('#pokemon-art'));
    }, 50);
  }

  nextPokemon() {
    return this.index + 1;
  }

  previousPokemon() {
    return this.index - 1;
  }

}
