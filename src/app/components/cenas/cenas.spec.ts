import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cenas } from './cenas';

describe('Cenas', () => {
  let component: Cenas;
  let fixture: ComponentFixture<Cenas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cenas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cenas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
