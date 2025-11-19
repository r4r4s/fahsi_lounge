import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cachimbas } from './cachimbas';

describe('Cachimbas', () => {
  let component: Cachimbas;
  let fixture: ComponentFixture<Cachimbas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cachimbas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cachimbas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
