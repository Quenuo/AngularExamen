import { Component, OnDestroy} from '@angular/core';
import { Shop } from '../../../interfaces/shop.interface';
import { ShopService } from '../../../services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrl: './filter-categories.component.scss'
})
export class FilterCategoriesComponent implements OnDestroy {
  products: Shop[] = [];
  parametroRuta?: Subscription
  producService?:Subscription
  load: boolean = false;
  constructor(private shop: ShopService, private parametrosRuta: ActivatedRoute) {
    //Filter categories es un compoenete que he usado para filtar el aray por categroias
    //mi array mostrara todos los objetos de una categoria
    //activated route segun la documentacion de angular proporciona informacion solbre la ruta actual del componente cargado
    //en un routlet outlet que esta en el main page

    this.parametroRuta = this.parametrosRuta.params//asigno un el suscription al emi observable para que reciba los valores emitidos
                        //esto es un servicio relacionado con las rutas URL
      .subscribe(parametro => {//me suscribo al parametro emitido por el obserbable
        //uso el parametro del para buscar objetos por categorias

        this.producService=this.shop.findByCategory(parametro['categories'])


          .subscribe(items => {
            this.products = items
            this.load = true

          }
          )
      }



      )
  }
  ngOnDestroy(): void {
    //on destroy es el ultimo metodo que se ejecuta automaticamente en el ciclo de vida de cualquier componente de angular
    //un componente se destruye cuando por ejemplo se cambia de ruta
    this.parametroRuta?.unsubscribe//cuando se destruye el compoente me desuscribo de lo dos servicios
    this.producService?.unsubscribe
  }

}
