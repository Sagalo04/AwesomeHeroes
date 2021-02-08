import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesNavComponent } from './heroes-nav.component';

describe('HeroesNavComponent', () => {
  let component: HeroesNavComponent;
  let fixture: ComponentFixture<HeroesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
