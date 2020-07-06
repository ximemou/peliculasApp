import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenPelicula'
})
export class ImagenPeliculaPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false): any {

    if ( !pelicula) {
      return 'assets/img/noImage.png';
    }
    let url = 'http://image.tmdb.org/t/p/w500';
    if ( poster) {
    return url + pelicula.poster_path;
    }
    if (pelicula.backdrop_path) {
      return url + pelicula.backdrop_path;
    } else {
       if (pelicula.poster_path) {
            return url + pelicula.poster_path;
       } else {
           return 'assets/img/noImage.png';
       }
    }
  }
}
