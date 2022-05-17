import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GetStartedSection } from './features/get-started/get-started.section';
import { QuickIntroSection } from './features/quick-intro/quick-intro.section';
import { FeaturedProductsSection } from './features/featured-products/featured-products.section';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    GetStartedSection,
    QuickIntroSection,
    FeaturedProductsSection,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
