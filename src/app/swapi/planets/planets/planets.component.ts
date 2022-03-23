import { Component, OnInit } from '@angular/core';
import { Observable, NEVER, map } from 'rxjs';
import { ApiService } from '../../api.service';
import { IPlanet } from '../../models/planet.interface';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styles: [],
})
export class PlanetsComponent implements OnInit {
  planets$: Observable<IPlanet[]> = NEVER;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.planets$ = this.api
      .getList<IPlanet>('planets')
      .pipe(map((data) => data.results));
  }
}
