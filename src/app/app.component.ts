import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { GeoLocationService } from './services/geo-location.service';
import { GeoData } from './models/geodata.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService, private geoLocationService: GeoLocationService){}

  cityName?: string = 'Sofia';
  weatherData?: WeatherData; 
  geoData?: GeoData;

  ngOnInit(): void {
    this.getGeoData('Sofia');
    this.cityName = '';
  }

  onSubmit(){
    this.getGeoData(this.cityName!);
    this.cityName = '';
  }

  getGeoData(cityName: string) {
    this.geoLocationService.requestData(cityName)
    .subscribe({
      next: (response) => {
        this.geoData = response[0];
        if(this.geoData === undefined) {
          window.alert('Enter valid city name!')
        }
        this.getWeatherData(this.geoData!.latitude, this.geoData!.longitude)
      }
    })
  }

  getWeatherData(latitude: number, longitude: number) {
    this.weatherService.getLocationData(latitude, longitude)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
        
      }
    })
  }
}
