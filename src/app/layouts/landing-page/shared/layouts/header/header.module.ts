import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatAllModule } from '../../materials/mat-all/mat-all.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatAllModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
