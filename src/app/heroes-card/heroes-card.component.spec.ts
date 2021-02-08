import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesCardComponent } from './heroes-card.component';

describe('HeroesCardComponent', () => {
  let component: HeroesCardComponent;
  let fixture: ComponentFixture<HeroesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
