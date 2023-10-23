import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }

  getLocationData(latitude: number, longitude: number): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherApiBaseUrl, 
      {
        params: new HttpParams()
          .set('latitude', latitude)
          .set('longitude', longitude)
      }
    ) 
  }
}
