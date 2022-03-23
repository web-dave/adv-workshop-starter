import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IFilm } from '../../models/film.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styles: [],
})
export class FilmsComponent implements OnInit {
  films: IFilm[] = [];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service
      .getList<IFilm>('films')
      .subscribe((data) => (this.films = data.results));
  }
}
