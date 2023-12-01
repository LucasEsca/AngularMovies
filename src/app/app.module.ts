import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { DetailComponent } from './presentation/pages/detail/detail.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { WatchlistComponent } from './presentation/pages/watchlist/watchlist.component';
import { Error404Component } from './presentation/pages/404/404.component';
import { MovieCardComponent } from './presentation/components/movie-card/movie-card.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    LoginComponent,
    WatchlistComponent,
    Error404Component, 
    NavbarComponent, 
    FooterComponent, 
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
