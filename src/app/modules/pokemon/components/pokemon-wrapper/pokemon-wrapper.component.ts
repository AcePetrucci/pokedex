import { Component, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { formatIndex } from '../../shared/_utils';

@Component({
  selector: 'app-pokemon-wrapper',
  templateUrl: './pokemon-wrapper.component.html',
  styleUrls: ['./pokemon-wrapper.component.styl']
})
export class PokemonWrapperComponent implements AfterViewInit, OnDestroy {

  @Input() name: string;
  @Input() weebName: string;
  @Input() index: number;

  private _destroy$: Subject<boolean> = new Subject<boolean>();
  backgroundColor: any;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.getBackgroundColor();

    this.router.events.pipe(takeUntil(this._destroy$)).subscribe(ev => {
      if (ev instanceof NavigationEnd) { this.getBackgroundColor(); }
    });
  }

  getBackgroundColor() {
    setTimeout(() => {
      const colorThief = new (<any>window).ColorThief(); // tslint:disable-line
      this.backgroundColor = colorThief.getColor(document.querySelector('#pokemon-art'));
    }, 50);
  }

  getImageName() {
    return `${formatIndex(this.index)}${this.name}`;
  }

  nextPokemon() {
    return this.index + 1;
  }

  previousPokemon() {
    return this.index - 1;
  }

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
