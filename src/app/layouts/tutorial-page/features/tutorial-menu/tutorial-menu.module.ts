import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TutorialGridComponent } from '../tutorial-grid/tutorial-grid.component';
import { TutorialMenuRoutingModule } from './tutorial-menu-routing.module';
import { TutorialMenuComponent } from './tutorial-menu.component';

@NgModule({
  declarations: [TutorialMenuComponent],
  imports: [CommonModule, TutorialMenuRoutingModule, TutorialGridComponent],
})
export class TutorialMenuModule {}
