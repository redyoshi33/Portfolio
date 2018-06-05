import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgsRevealModule } from 'ng-scrollreveal';
import { TwentyfourgameComponent } from './twentyfourgame/twentyfourgame.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { WeehComponent } from './weeh/weeh.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TwentyfourgameComponent,
    PokedexComponent,
    WeehComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ScrollToModule.forRoot(),
    NgsRevealModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
