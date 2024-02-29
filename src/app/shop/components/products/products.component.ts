import { Component, OnDestroy } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Shop } from '../../interfaces/shop.interface';
import {Subscription} from'rxjs'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnDestroy{
  products:Shop[]=[]
  productsSuscription?:Subscription
  constructor(private shop:ShopService){//al drestruirse un componente se destruye,(suena tonto pero el constructo se ejecuta de nuevo al vorver de una ruta)
    this.getProducts();

  }
  ngOnDestroy(): void {

    this.productsSuscription?.unsubscribe();
  }
  getProducts(){
    this.productsSuscription=this.shop.findItems().subscribe(product=>{
      this.products=product;
     
    })
  }
}
