import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EncriptacionComponent } from './encriptacion/encriptacion.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [

  { path: '', component: ProductosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'encriptacion', component: EncriptacionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
