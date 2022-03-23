import { Component, OnInit } from '@angular/core';
import { Observable, NEVER, map } from 'rxjs';
import { ApiService } from '../../api.service';
import { ISpecie } from '../../models/specie.interface';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styles: [],
})
export class SpeciesComponent implements OnInit {
  species$: Observable<ISpecie[]> = NEVER;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.species$ = this.api
      .getList<ISpecie>('species')
      .pipe(map((data) => data.results));
  }
}
