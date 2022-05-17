import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesAppComponent } from './features-app.component';

const routes: Routes = [
  { path: '', component: FeaturesAppComponent },
  {
    path: 'diagnosa-diabetes',
    loadChildren: () =>
      import('./diagnosa-diabetes/diagnosa-diabetes.module').then(
        (m) => m.DiagnosaDiabetesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesAppRoutingModule {}
