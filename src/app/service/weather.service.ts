import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  apiKey: string = 'cc61050e3bcf94cf9782fcba1cca56f6';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string, units: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=${units}`);
  }
}

