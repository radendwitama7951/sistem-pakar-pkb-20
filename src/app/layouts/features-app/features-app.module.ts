import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesAppRoutingModule } from './features-app-routing.module';
import { FeaturesAppComponent } from './features-app.component';


@NgModule({
  declarations: [
    FeaturesAppComponent
  ],
  imports: [
    CommonModule,
    FeaturesAppRoutingModule
  ]
})
export class FeaturesAppModule { }
