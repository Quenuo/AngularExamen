import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';
import { SearchComponent } from './components/search/search.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/filter/filter.component';
import {MatFormField, MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { FilterCategoriesComponent } from './components/filter/filter-categories/filter-categories.component';
import { IdProductComponent } from './components/id-product/id-product.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    PagesComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent,
    FilterCategoriesComponent,
    IdProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormField,
    RouterModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule
  ],
  exports:[
    PagesComponent,
    SearchComponent
  ]
})
export class ShopModule { }
