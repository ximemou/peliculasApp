import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PeliculasService} from './services/peliculas.service';
import {FormsModule} from '@angular/forms';
import {APP_ROUTING} from './app.routes';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ImagenPeliculaPipe } from './pipes/imagen-pelicula.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    TarjetasComponent,
    PeliculaComponent,
    ImagenPeliculaPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
