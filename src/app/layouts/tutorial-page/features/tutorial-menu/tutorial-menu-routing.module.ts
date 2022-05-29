import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialMenuComponent } from './tutorial-menu.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialMenuRoutingModule {}
