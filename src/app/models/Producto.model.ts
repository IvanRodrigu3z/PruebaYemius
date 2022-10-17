export interface Producto{
    codigo:string;
    descripcion:string;
    listaDePrecios:Array<any>;
    imagen:string;
    productoParaVenta:boolean;
    porcentajeIva:number;
}