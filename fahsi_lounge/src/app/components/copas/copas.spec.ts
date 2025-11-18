import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Copas } from './copas';

describe('Copas', () => {
  let component: Copas;
  let fixture: ComponentFixture<Copas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Copas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Copas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
