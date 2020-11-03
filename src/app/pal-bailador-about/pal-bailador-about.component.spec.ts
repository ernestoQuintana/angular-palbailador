import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalBailadorAboutComponent } from './pal-bailador-about.component';

describe('PalBailadorAboutComponent', () => {
  let component: PalBailadorAboutComponent;
  let fixture: ComponentFixture<PalBailadorAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalBailadorAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalBailadorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
