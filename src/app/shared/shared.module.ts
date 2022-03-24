import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiLinkPipe } from './swapi-link.pipe';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [SwapiLinkPipe, PaginatorComponent],
  exports: [SwapiLinkPipe, PaginatorComponent],
  imports: [CommonModule],
})
export class SharedModule {}
