import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  filter,
  interval,
  NEVER,
  Observable,
  pluck,
  share,
  shareReplay,
} from 'rxjs';
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
  crawl$: Observable<string> = NEVER;
  foo$ = interval(1500);
  show = false;
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.film$ = this.api
        .getEntity<IFilm>('films', data['id'])
        .pipe(shareReplay());
      this.crawl$ = this.film$.pipe(
        filter((film) => film.director === 'George Lucas'),
        pluck('opening_crawl')
      );
    });
  }
}
