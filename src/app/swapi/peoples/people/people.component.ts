import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { IPeople } from '../../models/people.interface';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: [],
})
export class PeopleComponent implements OnInit {
  people$: Observable<IPeople> = NEVER;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.people$ = this.api.getEntity<IPeople>(
      'people',
      this.route.snapshot.params['id']
    );
  }
}
