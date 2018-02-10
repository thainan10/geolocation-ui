import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class GeolocationService {
  API = environment.serverUrl;

  constructor(private http: HttpClient) { }

  fetchGeolocations(): Observable<any>{
    const resourceUrl = `${this.API}/geolocations`;
    return this.http.get<any[]>(resourceUrl);
  }

}
