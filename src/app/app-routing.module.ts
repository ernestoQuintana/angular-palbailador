import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalBailadorHomeComponent } from './pal-bailador-home/pal-bailador-home.component';
import { PalBailadorAboutComponent } from './pal-bailador-about/pal-bailador-about.component';
import { PalBailadorProductsComponent } from './pal-bailador-products/pal-bailador-products.component';
import { PalBailadorCartComponent } from './pal-bailador-cart/pal-bailador-cart.component';
import { PalBailadorContactComponent } from './pal-bailador-contact/pal-bailador-contact.component';


//aca van todos los ruteos de la aplicacion
const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'full',
  },
  {
    path : 'home',
    component: PalBailadorHomeComponent,
  },
  {
    path : 'about',
    component: PalBailadorAboutComponent,
  },
  {
    path : 'products',
    component: PalBailadorProductsComponent,
  },
  {
    path : 'cart',
    component: PalBailadorCartComponent,
  },
  {
    path : 'contact',
    component: PalBailadorContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
