import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

import {RouterModule, Routes} from '@angular/router';


const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:text', component: SearchComponent},
  {path: 'movie/:id/:pag', component: PeliculaComponent},
  {path: 'movie/:id/:pag/:search', component: PeliculaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
