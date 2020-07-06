import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
              private pelisService: PeliculasService) {
                pelisService.limpiar();
              }

  ngOnInit() {
  }

  buscarPelicula( textoABuscar: string) {
    if (textoABuscar.length === 0) {
       return;
    }
    this.router.navigate(['search', textoABuscar]);
  }

}
