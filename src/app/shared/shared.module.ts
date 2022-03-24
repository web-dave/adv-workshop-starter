import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiLinkPipe } from './swapi-link.pipe';

@NgModule({
  declarations: [SwapiLinkPipe],
  exports: [SwapiLinkPipe],
  imports: [CommonModule],
})
export class SharedModule {}
