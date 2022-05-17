import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingMachineComponent } from './training-machine.component';

const routes: Routes = [{ path: '', component: TrainingMachineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingMachineRoutingModule { }
