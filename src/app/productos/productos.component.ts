import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productoService : ProductosService) { }

  productos: any = {};

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(response =>{
      console.log("adentroosdf")
      this.productos = response;
    });
    console.log("listado de productos" + this.productos);
  }

}
