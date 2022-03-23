import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { IStarship } from '../../models/starship.interface';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styles: [],
})
export class StarshipComponent implements OnInit {
  starship!: IStarship;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.api
      .getEntity<IStarship>('starships', this.route.snapshot.params['id'])
      .subscribe((data) => (this.starship = data));
  }
}
