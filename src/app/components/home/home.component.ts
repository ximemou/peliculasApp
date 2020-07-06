import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any[] = [];
  populares: any [] = [];
  popularesNinos: any[] = [];

  constructor(public pelService: PeliculasService) {
    this.pelService.obtenerCartelera()
    .subscribe( data => {
      this.cartelera = data['results'];
    } );

    this.pelService.getMostPopular()
    .subscribe( data => {
      this.populares = data['results'];
    } );

    this.pelService.obtenerMasPoularesNinos()
    .subscribe( data => {
      this.popularesNinos = data['results'];
    } );
  }

  ngOnInit() {
  }

}
