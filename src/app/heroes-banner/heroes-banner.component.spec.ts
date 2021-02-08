import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesBannerComponent } from './heroes-banner.component';

describe('HeroesBannerComponent', () => {
  let component: HeroesBannerComponent;
  let fixture: ComponentFixture<HeroesBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
