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
  sub = new Subscription();
  constructor() {}
  ngOnInit(): void {
    this.sub.add(interval(4000).subscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.error('TOT');
  }
}
