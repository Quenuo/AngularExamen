import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Shop } from "../interfaces/shop.interface";
import { Observable } from "rxjs";



@Injectable({ providedIn: 'root' })
export class ShopService {
  private url: string = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {

  }
  findItems():Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url)

  }
  findByCategory(category:string):Observable<Shop[]>{

    return this.http.get<Shop[]>(`${this.url}/category/${category}`)
  }


}
