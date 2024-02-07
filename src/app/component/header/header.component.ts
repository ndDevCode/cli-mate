import { Component, OnInit } from '@angular/core';
import { ClimateService } from '../../climate.service';
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
  loc_coordinates: number[] = [];

  constructor(private climateService: ClimateService) {}

  ngOnInit(): void {
    this.climateService.getGeoLocation().subscribe((res: any) => {
      this.cityName = res.city;
      this.getData();
    });
  }

  getData() {
    this.climateService
      .getLocation(this.cityName)
      .subscribe((locationData: any) => {
        this.loc_coordinates[0] = locationData[0].lat;
        this.loc_coordinates[1] = locationData[0].lon;

        this.climateService
          .getCurrentWeatherData(
            this.loc_coordinates[0],
            this.loc_coordinates[1]
          )
          .subscribe((currentWeatherData) => {
            this.currentWeatherInfo = currentWeatherData;
            console.log(currentWeatherData);
            this.getForecastData();
          });
      });
  }

  getForecastData() {
    this.climateService
      .getForecastData(this.loc_coordinates[0], this.loc_coordinates[1])
      .subscribe((data) => {
        this.forecastWeatherInfo = data;
        console.log(data);
      });
  }

  getCurrentWeatherData() {
    console.log('Weather Data');
    this.getData();
  }
}
