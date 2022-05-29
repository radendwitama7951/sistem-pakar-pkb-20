import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TutorialGridComponent } from 'src/app/layouts/tutorial-page/features/tutorial-grid/tutorial-grid.component';
import { LandingPageService } from 'src/app/core/services/landing-page.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TutorialGridComponent,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ProductsModule {
  constructor(private _landingPageService: LandingPageService) {
    this._landingPageService.loadAplikasi();
  }
}
