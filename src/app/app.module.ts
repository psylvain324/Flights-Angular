import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightsSearchComponent } from './components/flights-search/flights-search.component';
import { FlightsResultsComponent } from './components/flights-results/flights-results.component';

@NgModule({
  declarations: [AppComponent, FlightsSearchComponent, FlightsResultsComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
