import { Component } from '@angular/core';
import { ForecastDataComponent } from '../forecast-data/forecast-data.component';
import { HeaderComponent } from '../header/header.component';
import { MainDataCardComponent } from '../main-data-card/main-data-card.component';
import { SubDataCardComponent } from '../sub-data-card/sub-data-card.component';
import { AirQualityDataComponent } from '../air-quality-data/air-quality-data.component';
import { WeatherMapComponent } from '../weather-map/weather-map.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ForecastDataComponent,
    HeaderComponent,
    MainDataCardComponent,
    SubDataCardComponent,
    AirQualityDataComponent,
    WeatherMapComponent,
  ],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {}