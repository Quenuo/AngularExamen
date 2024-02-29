import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './shop/components/products/products.component';
import { FilterComponent } from './shop/components/filter/filter.component';


const routes: Routes = [
  {
    path:'product',
    component:ProductsComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


