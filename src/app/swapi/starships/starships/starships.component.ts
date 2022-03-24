import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, NEVER, Observable, Subject, Subscriber } from 'rxjs';
import {
  pluck,
  map,
  tap,
  distinctUntilChanged,
  switchMap,
  flatMap,
  delay,
  filter,
} from 'rxjs/operators';

import { ApiService } from '../../api.service';
import { IStarship } from '../../models/starship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styles: [],
})
export class StarshipsComponent implements OnInit {
  starships$: Observable<IStarship[]> = NEVER;
  count = 1;
  page = 0;
  max = 1;
  pageChages$ = new Subject<number>();

  page$: Observable<number> = NEVER;
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Hallo');
    this.page$ = merge(
      this.route.queryParams.pipe(pluck('page')),
      this.pageChages$
    ).pipe(
      filter((data: number) => !!data),
      map((data) => (isNaN(data) ? 1 : data)),
      map((data) => (data <= 0 ? 1 : data)),
      map((data) => (data > this.max ? this.max : data)),
      distinctUntilChanged(),
      // tap((nPage) => (this.page = nPage)),
      tap((page) =>
        this.router.navigate(['.'], {
          relativeTo: this.route,
          queryParams: { page },
        })
      )
    );

    this.starships$ = this.page$.pipe(
      tap((foo) => console.log('foo', foo)),
      switchMap((data) =>
        this.api.getList<IStarship>('starships', data).pipe(
          tap((data) => {
            this.count = data.count;

            this.max = new Array(Math.ceil(this.count / 10)).length;
          }),
          map((data) => data.results)
        )
      )
    );
    // this.page$.subscribe((nPage) => {
    //   // const pPage = this.page;
    //   // this.page = nPage;
    //   // if (isNaN(this.page)) {
    //   //   this.page = 1;
    //   // }
    //   // if (this.page <= 0) {
    //   //   this.page = 1;
    //   // }
    //   // if (this.page > this.max) {
    //   //   this.page = this.max;
    //   // }
    //   // if (pPage === this.page) return;
    //   this.getdata();
    // });
  }

  changePage(p: number) {
    this.pageChages$.next(p);
  }

  // getdata() {
  //   this.router.navigate(['.'], {
  //     relativeTo: this.route,
  //     queryParams: {
  //       page: this.page,
  //     },
  //   });
  //   this.starships$ = this.api.getList<IStarship>('starships', this.page).pipe(
  //     tap((data) => {
  //       this.count = data.count;
  //       this.max = new Array(Math.ceil(this.count / 10)).length;
  //     }),
  //     map((data) => data.results)
  //   );
  // }
}
