import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../environments/interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClimateService {
  constructor(private http: HttpClient) {}

  private keys: Environment = environment;

  private api_key_weather: string = this.keys.apiKeyWeather;
  private api_key_location: string = this.keys.apiKeyLocation;

  getGeoLocationByIp() {
    const url =
      'https://ipgeolocation.abstractapi.com/v1/?api_key=' +
      this.api_key_location;
    return this.http.get(url);
  }

  getGeoLocationByName(city: String): any {
    const geoLocate = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${
      this.api_key_weather
    }`;

    return this.http.get(geoLocate);
  }

  getCurrentWeatherDataByPosition(lat: any, lon: any) {
    const openWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.api_key_weather}`;

    return this.http.get(openWeather);
  }

  getCurrentWeatherDataByCity(city: String) {
    const openWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.api_key_weather}`;

    return this.http.get(openWeather);
  }

  getForecastData(city: String) {
    const foreCast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${this.api_key_weather}`;

    return this.http.get(foreCast);
  }

  getAirQualityData(lat: any, lon: any) {
    const airQuality = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${this.api_key_weather}`;

    return this.http.get(airQuality);
  }
}
