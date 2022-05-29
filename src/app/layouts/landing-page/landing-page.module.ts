import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { HeaderModule } from './shared/layouts/header/header.module';
import { FooterComponent } from './shared/layouts/footer/footer.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    HeaderModule,
    FooterComponent,
  ],
})
export class LandingPageModule {}
