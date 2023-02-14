import { Cancion } from "./Cancion";
import { ICancion } from "./ICancion";
import { IListaCanciones } from "./IListaCanciones";

export class ListaCanciones implements IListaCanciones{
    agregarCancion(Cancion: ICancion): ICancion {
        this.canciones.push(Cancion);
        console.log("Suscriptor creado", Cancion);
        return Cancion;
    }
    nombre: string | undefined;
    fechaCreacion: Date | undefined;
    canciones: ICancion[] = [];
   
    // crear funcion para reproducir una cancion por nombre
    reproducirCancion(Cancion: ICancion): ICancion {
        this.canciones.push(Cancion);
        console.log("La cancion que se esta reproduciendo es: ", Cancion.titulo);
        return Cancion;
       
    }
    // funcion para descargar una cancion por nombre
    descargarCancion(Cancion: ICancion): ICancion {
        this.canciones.push(Cancion);
        console.log("DESCARGANDO : ", Cancion.titulo);
        return Cancion;
    }

    // funcion para cambiar el nombre de la lista de canciones
    cambiarNombre(Cancion: ListaCanciones): ListaCanciones {
        this.nombre = Cancion.nombre;
        return Cancion;
    }

    // funcion para agregar una cancion a la lista de canciones
   // agregarCancion(Cancion: ICancion): ICancion {
     //   this.canciones.push(Cancion);
   // //}
    eliminarCancion(Cancion: ICancion): void {
        this.canciones = this.canciones.filter(Cancion => Cancion.titulo !== Cancion.titulo);
        console.log("Cancion eliminada", Cancion);
    }
}