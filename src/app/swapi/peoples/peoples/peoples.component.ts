import { Component, OnInit } from '@angular/core';
import { Observable, NEVER, map, tap } from 'rxjs';
import { ApiService } from '../../api.service';
import { IPeople } from '../../models/people.interface';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styles: [],
})
export class PeoplesComponent implements OnInit {
  peoples$: Observable<IPeople[]> = NEVER;

  foo = 'bar/baz/';
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // setInterval(() => (this.foo = 'bar/baz/'), 1500);
    this.peoples$ = this.api.getList<IPeople>('people').pipe(
      tap((data) => console.log(data)),
      map((data) => data.results)
    );
  }

  transform(url: string): string | undefined {
    console.log('Method', url);
    return url.split('/').slice(0, -1).pop();
  }
}
