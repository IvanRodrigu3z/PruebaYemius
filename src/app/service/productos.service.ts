import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  API_PRODUCTOS =  "http://localhost:5092/listar";

  public getProductos(){
    return this.http.get(this.API_PRODUCTOS);
  }

  public addProducto(){

  }
}
