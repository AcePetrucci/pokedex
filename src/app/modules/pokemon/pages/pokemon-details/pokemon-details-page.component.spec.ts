import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsPageComponent } from './pokemon-details-page.component';

describe('PokemonDetailsPageComponent', () => {
  let component: PokemonDetailsPageComponent;
  let fixture: ComponentFixture<PokemonDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
