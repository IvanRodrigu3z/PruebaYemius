export interface Producto{
    id:number;
    codigo:string;
    descripcion:string;
    listaDePrecios:Array<any>;
    imagen:string;
    productoParaVenta:boolean;
    porcentajeIva:number;
}