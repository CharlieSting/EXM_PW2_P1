import { ICancion } from "./ICancion";
import { ListaCanciones } from "./ListaCanciones";

 export interface IListaCanciones {
    canciones: ICancion[];
    nombre : string | undefined;
    fechaCreacion: Date | undefined;
    reproducirCancion(Cancion: ICancion): ICancion;
    descargarCancion(Cancion: ICancion): ICancion;
    cambiarNombre(nombre: ListaCanciones): ListaCanciones;
    agregarCancion(Cancion: ICancion): ICancion;
    eliminarCancion(Cancion: ICancion): void;
    cambiarNombre1(nombre: string): ListaCanciones;
}