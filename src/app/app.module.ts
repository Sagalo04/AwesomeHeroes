import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesCardComponent } from './heroes-card/heroes-card.component';
import { HeroesNavComponent } from './heroes-nav/heroes-nav.component';
import { HeroesBannerComponent } from './heroes-banner/heroes-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesCardComponent,
    HeroesNavComponent,
    HeroesBannerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
