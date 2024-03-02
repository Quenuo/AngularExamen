import { Component, OnDestroy } from '@angular/core';
import { Shop } from '../../interfaces/shop.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'id-product',
  templateUrl: './id-product.component.html',
  styleUrl: './id-product.component.scss'
})
export class IdProductComponent implements OnDestroy {
  //IDProduct es un compente que he usado para filtrar productos por  id
  //ademas muestra informacion detallada de cada producto,
  //este componente se activa automaticamente al hacer click sobre un determinado componente en products o en filter-categories
  products: Shop[] = [];
  parametroRuta?: Subscription
  producService?: Subscription
  load: boolean = false;
  constructor(private parametrosRuta: ActivatedRoute, private shop: ShopService) {
    this.parametroRuta = this.parametrosRuta.params
      .subscribe(parametro => {
        this.producService = this.shop.findById(parametro['id'])
          .subscribe(item => {
            this.products.push(item)

            this.load = true;
          })
      })

  }
  ngOnDestroy(): void {
    //on destroy es el ultimo metodo que se ejecuta automaticamente en el ciclo de vida de cualquier componente de angular
    //un componente se destruye cuando por ejemplo se cambia de ruta
    this.parametroRuta?.unsubscribe//cuando se destruye el compoente me desuscribo de lo dos servicios
    this.producService?.unsubscribe
  }

}

