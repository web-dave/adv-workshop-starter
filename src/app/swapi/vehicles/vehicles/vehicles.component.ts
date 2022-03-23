import { Component, OnInit } from '@angular/core';
import { Observable, NEVER, map } from 'rxjs';
import { ApiService } from '../../api.service';
import { IVehicles } from '../../models/vehicle.interface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styles: [],
})
export class VehiclesComponent implements OnInit {
  vehicles$: Observable<IVehicles[]> = NEVER;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.vehicles$ = this.api
      .getList<IVehicles>('vehicles')
      .pipe(map((data) => data.results));
  }
}
