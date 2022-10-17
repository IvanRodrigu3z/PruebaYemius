import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  API_PRODUCTOS =  "http://localhost:5092/";

  public getProductos(){
    return this.http.get(this.API_PRODUCTOS + "productos");
  }

  public addProducto(producto:Producto){
    let api = this.API_PRODUCTOS + "añadir";
    this.http.post(api, producto);
  }

  public getProducto(id:number){
    return this.http.get(this.API_PRODUCTOS + "producto/" + id);
  }

  public deleteProduct(id:number){
    let api = this.API_PRODUCTOS + "eliminar/" + id;
    
    this.http.delete(api); 
  }
}
