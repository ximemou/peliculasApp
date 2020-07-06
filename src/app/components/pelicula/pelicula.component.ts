import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  regresarA: string = '';
  busqueda: string = '';

  constructor(public peliculasService: PeliculasService,
              public router: ActivatedRoute) {


                this.router.params.subscribe( parametros => {
                  this.regresarA = parametros.pag;
                  if (parametros.search) {
                      this.busqueda = parametros.search;
                  }
                  this.peliculasService.obtenerPeliculaPorId(parametros.id)
                  .subscribe(pelicula => {
                    this.pelicula = pelicula;
                  });
                });
              }

  ngOnInit() {
  }

}
