import { Component, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Producto } from '../models/Producto.model';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnChanges {

  constructor(private productoService : ProductosService){ 
    this.productos;
  }
  precio:number = 0;
  detalleProducto:any = {};
  producto:Producto = {
    id: 0,
    codigo : "",
    descripcion : "",
    listaDePrecios : [],
    imagen : "",
    productoParaVenta : true,
    porcentajeIva : 0

  }

  productos: any = {};

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
    this.productoService.getProductos().subscribe(response =>{
      this.productos = response;
    });
    return this.productos;
  }

  addPrice(){
    if(this.precio > 0){
      this.producto.listaDePrecios.push(this.precio);
    }
    this.precio = 0;
  }

  addProduct(){
    this.addPrice();
    this.productoService.addProducto(this.producto);
    
  }


  getProduct(id:number){
    this.productoService.getProducto(id).subscribe(resp =>{
      this.detalleProducto = resp;
    });
  }

  deleteProduct(id:number){
    this.productoService.deleteProduct(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productos;
  }
}
