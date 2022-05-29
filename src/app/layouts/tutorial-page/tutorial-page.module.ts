import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialPageRoutingModule } from './tutorial-page-routing.module';
import { TutorialPageComponent } from './tutorial-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [TutorialPageComponent],
  imports: [CommonModule, TutorialPageRoutingModule, SharedModule],
  exports: [],
})
export class TutorialPageModule {}
