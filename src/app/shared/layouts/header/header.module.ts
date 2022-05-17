import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatAllModule } from '../../materials/mat-all/mat-all.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatAllModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
