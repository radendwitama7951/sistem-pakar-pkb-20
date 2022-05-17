import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosaDiabetesRoutingModule } from './diagnosa-diabetes-routing.module';
import { DiagnosaDiabetesComponent } from './diagnosa-diabetes.component';
import { DiagnosaDiabetesLayoutModule } from './shared/layouts/layouts.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [DiagnosaDiabetesComponent],
  imports: [
    CommonModule,
    DiagnosaDiabetesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    DiagnosaDiabetesLayoutModule,
  ],
})
export class DiagnosaDiabetesModule {}
