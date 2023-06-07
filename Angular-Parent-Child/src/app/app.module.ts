import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieTableComponent } from './movie-table/movie-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDashboardComponent,
    MovieTableComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
