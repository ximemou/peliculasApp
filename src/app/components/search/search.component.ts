import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  buscar: string = '';

  constructor(public peliculaService: PeliculasService,
              public router: ActivatedRoute) {
                this.buscar =  '';
                this.router.params.subscribe( parametros => {
                  if (parametros['text']) {
                    this.buscar = parametros['text'];
                    this.buscarPelicula();
                  }
                });
               }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }
    this.peliculaService.obtenerPelicula(this.buscar)
    .subscribe();
  }

}
