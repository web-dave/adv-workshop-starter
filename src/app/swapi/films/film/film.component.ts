import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable, share, shareReplay } from 'rxjs';
import { ApiService } from '../../api.service';
import { IFilm } from '../../models/film.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FilmComponent implements OnInit, OnDestroy {
  film$: Observable<IFilm> = NEVER;
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) =>
        (this.film$ = this.api
          .getEntity<IFilm>('films', data['id'])
          .pipe(shareReplay()))
    );
  }
}
