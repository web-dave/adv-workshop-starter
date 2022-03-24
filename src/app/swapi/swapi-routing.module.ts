import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './films/film/film.component';
import { FilmsComponent } from './films/films/films.component';
import { PeopleComponent } from './peoples/people/people.component';
import { PeoplesComponent } from './peoples/peoples/peoples.component';
import { PlanetComponent } from './planets/planet/planet.component';
import { PlanetsComponent } from './planets/planets/planets.component';
import { SpecieComponent } from './species/specie/specie.component';
import { SpeciesComponent } from './species/species/species.component';
import { StarshipComponent } from './starships/starship/starship.component';
import { StarshipsComponent } from './starships/starships/starships.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles/vehicles/vehicles.component';

const routes: Routes = [
  {
    path: 'films',
    children: [
      {
        path: '',
        component: FilmsComponent,
      },
      {
        // films/2
        path: ':id',
        component: FilmComponent,
      },
    ],
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./starships/starships.module').then((m) => m.StarshipsModule),
  },
  {
    path: 'people',
    children: [
      {
        path: '',
        component: PeoplesComponent,
      },
      {
        path: ':id',
        component: PeopleComponent,
      },
    ],
  },
  {
    path: 'planets',
    children: [
      {
        path: '',
        component: PlanetsComponent,
      },
      {
        path: ':id',
        component: PlanetComponent,
      },
    ],
  },
  {
    path: 'species',
    children: [
      {
        path: '',
        component: SpeciesComponent,
      },
      {
        path: ':id',
        component: SpecieComponent,
      },
    ],
  },
  {
    path: 'vehicles',
    children: [
      {
        path: '',
        component: VehiclesComponent,
      },
      {
        path: ':id',
        component: VehicleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapiRoutingModule {}
