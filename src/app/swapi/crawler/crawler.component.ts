import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NEVER, Observable, pluck, tap } from 'rxjs';
import { IFilm } from '../models/film.interface';

@Component({
  selector: 'app-crawler',
  templateUrl: './crawler.component.html',
  styles: [],
})
export class CrawlerComponent implements OnChanges {
  @Input() film: string | undefined = '';
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
