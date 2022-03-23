import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { ApiService } from '../../api.service';
import { ISpecie } from '../../models/specie.interface';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styles: [],
})
export class SpecieComponent implements OnInit {
  species$: Observable<ISpecie> = NEVER;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.species$ = this.api.getEntity<ISpecie>(
      'species',
      this.route.snapshot.params['id']
    );
  }
}
