import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsearchComponent } from './carsearch/carsearch.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    CarsearchComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CarModule { }
