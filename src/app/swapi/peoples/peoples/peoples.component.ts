import { Component, OnInit } from '@angular/core';
import { Observable, NEVER, map } from 'rxjs';
import { ApiService } from '../../api.service';
import { IPeople } from '../../models/people.interface';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styles: [],
})
export class PeoplesComponent implements OnInit {
  peoples$: Observable<IPeople[]> = NEVER;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.peoples$ = this.api
      .getList<IPeople>('people')
      .pipe(map((data) => data.results));
  }
}
