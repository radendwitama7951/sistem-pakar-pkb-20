import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('src/app/layouts/landing-page/pages/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('src/app/layouts/landing-page/pages/about/about.module').then(
            (m) => m.AboutModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import(
            'src/app/layouts/landing-page/pages/products/products.module'
          ).then((m) => m.ProductsModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import(
            'src/app/layouts/landing-page/pages/contacts/contacts.module'
          ).then((m) => m.ContactsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
