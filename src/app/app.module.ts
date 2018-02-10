import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { GeolocationService } from './services/geolocation.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYyHgIcnrOZOTf3Fcslh5McFYLU6yF5A0'
    })
  ],
  providers: [
    GeolocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
