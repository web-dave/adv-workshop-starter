import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { ApiService } from '../../api.service';
import { IVehicles } from '../../models/vehicle.interface';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styles: [],
})
export class VehicleComponent implements OnInit {
  vehicles$: Observable<IVehicles> = NEVER;
  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.vehicles$ = this.api.getEntity<IVehicles>(
      'vehicles',
      this.route.snapshot.params['id']
    );
  }
}
