import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  cityName: string = 'Northampton';
  units: string = 'metric';
  todayDate: Date = new Date();
  currentWeather: any;
  temperature: number = 0;
  tempMax: number = 0;
  tempMin: number = 0;
  humidity: number = 0;
  wind: number = 0;
  pressure: number = 0;
  feelsLike: number = 0;
  summary: string = '';
  iconURL: string = '';


  constructor(
    private weatherService: WeatherService,
  ) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName, this.units);
  }

  onSubmit() {
    this.getWeatherData(this.cityName, this.units);
  }

  private getWeatherData(cityName: string, units: string) {

    this.weatherService.getWeatherData(cityName, units).subscribe({
      next: (data) => {
        console.log(data);
        this.currentWeather = data;
        console.log(this.currentWeather);
        this.temperature = this.currentWeather.main.temp;
        this.tempMax = this.currentWeather.main.temp_max;
        this.tempMin = this.currentWeather.main.temp_min;
        this.humidity = this.currentWeather.main.humidity;
        this.wind = this.currentWeather.wind.speed;
        this.pressure = this.currentWeather.main.pressure;
        this.feelsLike = this.currentWeather.main.feels_like;
        this.summary = this.currentWeather.weather[0].main;
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.currentWeather.weather[0].icon + '@2x.png';
      },

      error: (error) => console.log(error.message),
      complete: () => console.info('API call completed')
    });
  }

}
