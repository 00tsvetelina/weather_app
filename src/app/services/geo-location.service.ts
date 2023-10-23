import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { GeoData } from "../models/geodata.model";


@Injectable({
    providedIn: 'root'
})

export class GeoLocationService {

    constructor(private http: HttpClient) {}


    requestData(city: string): Observable<GeoData[]> {
        return this.http.get<GeoData[]>(
            environment.geoDataApiBaseUrl,
            {
                params: new HttpParams().set('city', city),
                headers: new HttpHeaders().append("X-Api-Key", environment.token)
            }
        ) 

    }
}

