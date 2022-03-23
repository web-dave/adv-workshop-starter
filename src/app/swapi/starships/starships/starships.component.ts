import { Component, OnInit } from '@angular/core';
import { NEVER, Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

import { ApiService } from '../../api.service';
import { IStarship } from '../../models/starship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styles: [],
})
export class StarshipsComponent implements OnInit {
  starships$: Observable<IStarship[]> = NEVER;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.starships$ = this.api
      .getList<IStarship>('starships')
      .pipe(map((data) => data.results));
  }
}
