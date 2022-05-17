import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { HeaderModule } from './shared/layouts/header/header.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, LandingPageRoutingModule, HeaderModule],
})
export class LandingPageModule {}
