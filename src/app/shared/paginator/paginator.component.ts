import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styles: [],
})
export class PaginatorComponent implements OnChanges {
  @Input() page: number | null = 1;
  @Input() count: number = 0;
  @Input() max: number = 1;
  @Output() paginate = new EventEmitter<number>();
  pages: number[] = [];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count'] && changes['count'].currentValue) {
      this.pages = new Array(Math.ceil(this.count / 10));
    }
  }

  pagination(nextPage: number) {
    console.log(this.page, nextPage);
    if (nextPage === this.page) return;
    if (nextPage <= 0) nextPage = 1;
    if (nextPage >= this.max) nextPage = this.max;
    this.paginate.emit(nextPage);
  }
  nextPrev(dir: number) {
    console.log(this.page, dir, parseInt(this.page + '', 10) + dir);
    this.pagination(parseInt(this.page + '', 10) + dir);
  }
}
