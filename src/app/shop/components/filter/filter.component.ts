import { Component} from '@angular/core';




@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent   {
  //Flter  es un componente que he usado  para selecciona una categroia
  //y segun esa caategoria se cambia la ruta al componente 
  //que filter-categories

  types: string[] = ["men's clothing", "electronics", "women's clothing", "jewelery"]



}

