import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipComponent } from './starship/starship.component';
import { StarshipsComponent } from './starships/starships.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StarshipsComponent, StarshipComponent],
  imports: [CommonModule, StarshipsRoutingModule, SharedModule],
})
export class StarshipsModule {}
