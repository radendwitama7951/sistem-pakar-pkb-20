import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosaDiabetesComponent } from './diagnosa-diabetes.component';

const routes: Routes = [
  {
    path: '',
    component: DiagnosaDiabetesComponent,
    children: [
      {
        path: '',
        redirectTo: 'edukasi',
        pathMatch: 'full',
      },
      {
        path: 'edukasi',
        loadChildren: () =>
          import('./pages/edukasi/edukasi.module').then((m) => m.EdukasiModule),
      },
      {
        path: 'diagnosa',
        loadChildren: () =>
          import('./pages/diagnosa/diagnosa.module').then(
            (m) => m.DiagnosaModule
          ),
      },
      {
        path: 'training-machine',
        canActivate: [false],
        loadChildren: () =>
          import('./pages/training-machine/training-machine.module').then(
            (m) => m.TrainingMachineModule
          ),
      },
      {
        path: 'riwayat',
        loadChildren: () =>
          import('./pages/riwayat/riwayat.module').then((m) => m.RiwayatModule),
      },
    ],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/extras/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./pages/extras/help/help.module').then((m) => m.HelpModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagnosaDiabetesRoutingModule {}
