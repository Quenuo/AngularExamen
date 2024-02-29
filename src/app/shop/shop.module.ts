import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';
import { SearchComponent } from './components/search/search.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductsComponent } from './components/products/products.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormField, MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    PagesComponent,
    SearchComponent,
    ProductsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatFormField,
    RouterModule,
    MatListModule,
    MatCardModule
  ],
  exports:[
    PagesComponent
  ]
})
export class ShopModule { }
