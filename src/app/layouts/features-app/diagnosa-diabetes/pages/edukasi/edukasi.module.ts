import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdukasiRoutingModule } from './edukasi-routing.module';
import { EdukasiComponent } from './edukasi.component';
import { TipeDiabetesComponent } from './features/tipe-diabetes/tipe-diabetes.component';


@NgModule({
  declarations: [
    EdukasiComponent,
    TipeDiabetesComponent
  ],
  imports: [
    CommonModule,
    EdukasiRoutingModule
  ]
})
export class EdukasiModule { }
