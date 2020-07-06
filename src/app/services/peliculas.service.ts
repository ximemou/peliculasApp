import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  // COMPLETAR PARA QUE FUNCIONE
 private apiKey = '';
 private urlLocalHost = 'https://api.themoviedb.org/3';

 peliculas: any[] = [];
 constructor(private _http: HttpClient) {}


 private getURL(request: string, language: string): string {
 return `${this.urlLocalHost}${request}?api_key=${this.apiKey}&language=${language}&callback=JSONP_CALLBACK`;
 }

 getMostPopular() {
 const request = '/movie/popular';
 return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map(res => res ));
 }


 obtenerCartelera() {
  const request = '/movie/now_playing';
  return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map(res => res ));
 }

 obtenerPelicula( pelicula: string) {
  const url = `${this.urlLocalHost}/search/movie?api_key=${this.apiKey}&language=en-US&query=${pelicula}&page1&include_adult=false
  &callback=JSONP_CALLBACK`;
  return this._http.jsonp(url, '').pipe(map((res: any) => {
      this.peliculas = res['results'];
      return res;
  }));
 }

 obtenerMasPoularesNinos() {

const url = `${this.urlLocalHost}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=
false&include_video=false&page=1&callback=JSONP_CALLBACK`;

return this._http.jsonp(url, '').pipe(map(res => res ));
 }

 obtenerPeliculaPorId( id: string) {
    const url = `${this.urlLocalHost}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this._http.jsonp(url, '').pipe(map((res: any) => res));
 }

 limpiar() {
   this.peliculas = [];
 }
}
