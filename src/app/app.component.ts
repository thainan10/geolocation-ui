import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  geolocations = [];
  baseGeolocation;

  constructor(private geolocationService: GeolocationService) {
    this.geolocationService.fetchGeolocations().subscribe((response) => {
      this.geolocations = response;
      this.baseGeolocation = this.geolocations[0];
    });
  }
}
