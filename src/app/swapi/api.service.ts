import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ISwapiResponse<t> {
  count: number;
  next: string | null;
  previouse: string | null;
  results: t[];
}

@Injectable()
export class ApiService {
  private endpoints = {
    films: 'https://swapi.dev/api/films/',
    people: 'https://swapi.dev/api/people/',
    planets: 'https://swapi.dev/api/planets/',
    species: 'https://swapi.dev/api/species/',
    starships: 'https://swapi.dev/api/starships/',
    vehicles: 'https://swapi.dev/api/vehicles/',
  };
  constructor(private http: HttpClient) {}

  getList<t>(
    name: 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles',
    page: number = 1
  ): Observable<ISwapiResponse<t>> {
    return this.http.get<ISwapiResponse<t>>(
      this.endpoints[name] + '?page=' + page
    );
  }

  getEntity<t>(
    name: 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles',
    id: string
  ): Observable<t> {
    return this.http.get<t>(this.endpoints[name] + id);
  }
}
