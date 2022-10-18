import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncriptacionComponent } from './encriptacion/encriptacion.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './productos/detalle/detalle.component';

 
@NgModule({
  declarations: [
    AppComponent,
    EncriptacionComponent,
    ProductosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
