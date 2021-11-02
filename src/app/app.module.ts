import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { PokemonIndexComponent } from './pokemon-index/pokemon-index.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonIndexComponent,
    PokemonDetailComponent
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
