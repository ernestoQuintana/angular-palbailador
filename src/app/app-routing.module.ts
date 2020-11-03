import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalBailadorAboutComponent } from './pal-bailador-about/pal-bailador-about.component';
import { PalBailadorProductsComponent } from './pal-bailador-products/pal-bailador-products.component';

//aca van todos los ruteos de la aplicacion
const routes: Routes = [
  {
    path : '',
    redirectTo : 'products',
    pathMatch: 'full',
  },
  {
    path : 'products',
    component: PalBailadorProductsComponent,
  },
  {
    path : 'about',
    component: PalBailadorAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
