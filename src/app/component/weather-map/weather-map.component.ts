import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import * as Aos from 'aos';

@Component({
  selector: 'app-weather-map',
  standalone: true,
  imports: [LeafletModule, CommonModule],
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.css'],
})
export class WeatherMapComponent implements OnChanges {
  ngOnChanges(change: SimpleChanges): void {
    this.initMap();
  }

  @Input() weatherData: any;

  map: L.Map;
  radiusInMeters = 5000;

  constructor() {}

  initMap(): void {
    if (this.weatherData != null && this.weatherData != undefined) {
      if (this.map) {
        this.map.remove();
      }

      const center = {
        lat: this.weatherData?.coord?.lat,
        lng: this.weatherData?.coord?.lon,
      };
      this.map = L.map('leafletMap').setView(center, 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.map);

      L.circle(center, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: this.radiusInMeters,
      }).addTo(this.map);
    }
  }
}
