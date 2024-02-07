import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirQualityDataComponent } from './air-quality-data.component';

describe('AirQualityDataComponent', () => {
  let component: AirQualityDataComponent;
  let fixture: ComponentFixture<AirQualityDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirQualityDataComponent]
    });
    fixture = TestBed.createComponent(AirQualityDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
