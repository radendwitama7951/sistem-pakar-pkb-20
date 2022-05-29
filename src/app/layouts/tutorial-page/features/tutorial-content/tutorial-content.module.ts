import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TutoriaContentRoutingModule } from './tutorial-content-routing.module';
import { TutorialContentComponent } from './tutorial-content.component';

@NgModule({
  declarations: [TutorialContentComponent],
  imports: [CommonModule, TutoriaContentRoutingModule],
})
export class TutorialContentModule {}
