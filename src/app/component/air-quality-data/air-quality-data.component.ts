import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ClimateService } from 'src/app/services/climate.service';

@Component({
  selector: 'app-air-quality-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './air-quality-data.component.html',
  styleUrls: ['./air-quality-data.component.css'],
})
export class AirQualityDataComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    Aos.init();
  }
  ngOnChanges(): void {
    this.loadAirQualityData();
  }

  constructor(private climateService: ClimateService) {}

  @Input() weatherData: any;
  public airQualityData: any;
  public sunrise: any;
  public sunset: any;

  loadAirQualityData() {
    if (this.weatherData != null || this.weatherData != undefined) {
      this.climateService
        .getAirQualityData(
          this.weatherData.coord.lat,
          this.weatherData.coord.lon
        )
        .subscribe((res) => {
          this.airQualityData = res;
        });

      this.sunrise = new Date(
        this.weatherData.sys.sunrise * 1000
      ).toLocaleTimeString();
      this.sunset = new Date(
        this.weatherData.sys.sunset * 1000
      ).toLocaleTimeString();
    }
  }
}
