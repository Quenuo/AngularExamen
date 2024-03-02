import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './shop/components/products/products.component';
import { FilterComponent } from './shop/components/filter/filter.component';
import { FilterCategoriesComponent } from './shop/components/filter/filter-categories/filter-categories.component';
import { IdProductComponent } from './shop/components/id-product/id-product.component';
import { PagesComponent } from './shop/pages/pages.component';


const routes: Routes = [
    {
      path:'',
      component:PagesComponent
    }
  ,{
    path:'product',
    component:ProductsComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },{
    path:'filter/:categories',
    component:FilterCategoriesComponent
  },{
    path:'product/:id',
    component:IdProductComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


