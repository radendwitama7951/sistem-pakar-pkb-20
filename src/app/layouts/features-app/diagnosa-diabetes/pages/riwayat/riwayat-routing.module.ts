import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiwayatComponent } from './riwayat.component';

const routes: Routes = [{ path: '', component: RiwayatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiwayatRoutingModule { }
