import { Component } from '@angular/core';
import { ForecastDataComponent } from '../component/forecast-data/forecast-data.component';
import { HeaderComponent } from '../component/header/header.component';
import { MainDataCardComponent } from '../component/main-data-card/main-data-card.component';
import { SubDataCardComponent } from '../component/sub-data-card/sub-data-card.component';
import { AirQualityDataComponent } from '../component/air-quality-data/air-quality-data.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    ForecastDataComponent,
    HeaderComponent,
    MainDataCardComponent,
    SubDataCardComponent,
    AirQualityDataComponent,
  ],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {}
