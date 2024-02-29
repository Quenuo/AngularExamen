import { Component, OnDestroy } from '@angular/core';
import { Shop } from '../../interfaces/shop.interface';
import { ShopService } from '../../services/shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnDestroy {
  products: Shop[] = [];
  types: string[] = ["men's clothing", "electronics", "women's clothing", "jewelery"]
  load = false;
  filterSuscription?:Subscription
  constructor(private shopService: ShopService) {

  }
  ngOnDestroy(): void {
    this.filterSuscription?.unsubscribe()
  }
  filterCategory(category: string) {

    this.filterSuscription= this.shopService.findByCategory(category).subscribe(items => {
      this.products = items;
      this.load = true
    })

  }
}
