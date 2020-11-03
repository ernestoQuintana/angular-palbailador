import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalBailadorCartComponent } from './pal-bailador-cart.component';

describe('PalBailadorCartComponent', () => {
  let component: PalBailadorCartComponent;
  let fixture: ComponentFixture<PalBailadorCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalBailadorCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalBailadorCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
