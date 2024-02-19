import { Component, OnInit } from '@angular/core';
import { ClimateService } from '../../services/climate.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public currentDate: String = new Date().toDateString();
  cityName: String = '';
  currentWeatherInfo: any;
  forecastWeatherInfo: any;

  constructor(private climateService: ClimateService) {}

  ngOnInit(): void {
    this.climateService.getGeoLocationByIp().subscribe((res: any) => {
      this.cityName = res.city;
      this.getDataWithName();
    });
  }

  getDataWithName() {
    this.climateService
      .getCurrentWeatherDataByCity(this.cityName)
      .subscribe((currentWeatherData) => {
        this.currentWeatherInfo = currentWeatherData;
        this.getForecastData();
      });
  }

  getForecastData() {
    this.climateService.getForecastData(this.cityName).subscribe((data) => {
      this.forecastWeatherInfo = data;
    });
  }

  getCurrentWeatherData() {
    this.getDataWithName();
  }
}
