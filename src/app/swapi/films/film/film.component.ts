import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from '../../api.service';
import { IFilm } from '../../models/film.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: [],
})
export class FilmComponent implements OnInit, OnDestroy {
  film!: IFilm;
  sub = new Subscription();
  constructor(private route: ActivatedRoute, private api: ApiService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) =>
      this.api
        .getEntity<IFilm>('films', data['id'])
        .subscribe((data) => (this.film = data))
    );
  }
}
