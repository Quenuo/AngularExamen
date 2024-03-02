import { Component } from '@angular/core';

@Component({
  selector: 'main-pages',
  templateUrl: './main-pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
  //Pages es la pagina principal donde se renderizaran las rutas, si las rutas se pone algo que no he especificado en mi routing module
  //sera redireccionado aqui
}
