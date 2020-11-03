import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalBailadorHomeComponent } from './pal-bailador-home.component';

describe('PalBailadorHomeComponent', () => {
  let component: PalBailadorHomeComponent;
  let fixture: ComponentFixture<PalBailadorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalBailadorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalBailadorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
