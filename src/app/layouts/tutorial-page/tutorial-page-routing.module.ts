import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialPageComponent } from './tutorial-page.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/tutorial-menu/tutorial-menu.module').then(
            (m) => m.TutorialMenuModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./features/tutorial-content/tutorial-content.module').then(
            (m) => m.TutorialContentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialPageRoutingModule {}
