import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { LandingPageService } from 'src/app/core/services/landing-page.service';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {
  constructor(private _landingPageService: LandingPageService) {
    this._landingPageService.loadAbout();
  }
}
