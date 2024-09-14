import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffButtonsComponent } from './tariff-buttons.component';

describe('TariffButtonsComponent', () => {
  let component: TariffButtonsComponent;
  let fixture: ComponentFixture<TariffButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TariffButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TariffButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
