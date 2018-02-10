import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYyHgIcnrOZOTf3Fcslh5McFYLU6yF5A0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
