import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  first,
  interval,
  NEVER,
  Observable,
  pluck,
  Subject,
  Subscriber,
  Subscription,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { IFilm } from '../models/film.interface';

@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styles: [],
})
export class CrawlerComponent implements OnChanges, OnInit, OnDestroy {
  @Input() film: string | null = '';
  @Input() crawl$: Observable<number> = NEVER;
  subs: Subscription[] = [];
  sub = new Subscription();
  kill$ = new Subject<number>();
  constructor() {}
  ngOnInit(): void {
    this.sub.add(interval(4000).subscribe());
    interval(4000)
      .pipe(take(1))
      .subscribe((data) => console.log('take1', data));
    interval(4000)
      .pipe(first())
      .subscribe((data) => console.log('first', data));
    interval(4000)
      .pipe(takeUntil(this.kill$))
      .subscribe((data) => console.log('kill', data));
    this.crawl$.subscribe((data) => console.log('!!', data));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnDestroy(): void {
    this.kill$.next(0);
    this.kill$.complete();
    this.subs.forEach((s) => s.unsubscribe());
    this.sub.unsubscribe();
    console.error('TOT');
  }
}
