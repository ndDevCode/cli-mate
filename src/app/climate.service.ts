import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClimateService {
  constructor(private http: HttpClient) {}

  private api_key_weather: string = environment.apiKey_weather;

  getGeoLocation() {
    const api_key_location = environment.apiKey_location;
    const url =
      'https://ipgeolocation.abstractapi.com/v1/?api_key=' + api_key_location;
    return this.http.get(url);
  }

  getLocation(city: String): any {
    const geoLocate = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${
      this.api_key_weather
    }`;

    return this.http.get(geoLocate);
  }

  getCurrentWeatherData(lat: any, lon: any) {
    const openWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.api_key_weather}`;

    return this.http.get(openWeather);
  }

  getForecastData(lat: any, lon: any) {
    const foreCast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${this.api_key_weather}`;

    return this.http.get(foreCast);
  }
}
