import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnosaRoutingModule } from './diagnosa-routing.module';
import { DiagnosaComponent } from './diagnosa.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [DiagnosaComponent],
  imports: [
    CommonModule,
    DiagnosaRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
  ],
})
export class DiagnosaModule {}
