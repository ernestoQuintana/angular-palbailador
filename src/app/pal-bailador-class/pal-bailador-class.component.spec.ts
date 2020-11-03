import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalBailadorClassComponent } from './pal-bailador-class.component';

describe('PalBailadorClassComponent', () => {
  let component: PalBailadorClassComponent;
  let fixture: ComponentFixture<PalBailadorClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalBailadorClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalBailadorClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
