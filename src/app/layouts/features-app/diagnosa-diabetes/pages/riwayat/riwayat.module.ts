import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiwayatRoutingModule } from './riwayat-routing.module';
import { RiwayatComponent } from './riwayat.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [RiwayatComponent],
  imports: [
    CommonModule,
    RiwayatRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class RiwayatModule {}
