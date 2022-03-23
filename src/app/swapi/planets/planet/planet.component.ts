import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { ApiService } from '../../api.service';
import { IPlanet } from '../../models/planet.interface';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styles: [],
})
export class PlanetComponent implements OnInit {
  planet$: Observable<IPlanet> = NEVER;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.planet$ = this.api.getEntity<IPlanet>(
      'planets',
      this.route.snapshot.params['id']
    );
  }
}
