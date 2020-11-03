import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalBailadorContactComponent } from './pal-bailador-contact.component';

describe('PalBailadorContactComponent', () => {
  let component: PalBailadorContactComponent;
  let fixture: ComponentFixture<PalBailadorContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalBailadorContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalBailadorContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
