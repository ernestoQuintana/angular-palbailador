import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalBailadorProductsComponent } from './pal-bailador-products.component';

describe('PalBailadorProductsComponent', () => {
  let component: PalBailadorProductsComponent;
  let fixture: ComponentFixture<PalBailadorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalBailadorProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalBailadorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
