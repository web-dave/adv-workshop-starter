import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmsComponent } from './films/films/films.component';
import { StarshipsComponent } from './starships/starships/starships.component';
import { SwapiRoutingModule } from './swapi-routing.module';
import { ApiService } from './api.service';
import { StarshipComponent } from './starships/starship/starship.component';
import { FilmComponent } from './films/film/film.component';
import { PeoplesComponent } from './peoples/peoples/peoples.component';
import { PeopleComponent } from './peoples/people/people.component';
import { PlanetsComponent } from './planets/planets/planets.component';
import { PlanetComponent } from './planets/planet/planet.component';
import { SpeciesComponent } from './species/species/species.component';
import { SpecieComponent } from './species/specie/specie.component';
import { VehiclesComponent } from './vehicles/vehicles/vehicles.component';
import { VehicleComponent } from './vehicles/vehicle/vehicle.component';

@NgModule({
  declarations: [
    FilmsComponent,
    StarshipsComponent,
    StarshipComponent,
    FilmComponent,
    PeoplesComponent,
    PeopleComponent,
    PlanetsComponent,
    PlanetComponent,
    SpeciesComponent,
    SpecieComponent,
    VehiclesComponent,
    VehicleComponent,
  ],
  imports: [CommonModule, HttpClientModule, SwapiRoutingModule],
  providers: [ApiService],
})
export class SwapiModule {}
