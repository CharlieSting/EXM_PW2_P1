import { Cancion } from "./Cancion";
import { ListaCanciones } from "./ListaCanciones";


// crear cancion
const cancion1 = new Cancion(1, "Living on Video", "Trans-X", "Hace siglos", "Clasicos", 2, new Date(1999, 1, 1));
const cancion2 = new Cancion(2, "Cheri Cheri Lady", "Modern Talking", "On My Own", "Clasicos", 3, new Date(1980, 1, 1));
const cancion3 = new Cancion(6, "Eclipse", "$uicideboy$", "Eternal Grey", "Trap", 3, new Date(2016, 8, 21));
const cancion4 = new Cancion(15, "Группа крови", "Группа КИНО", "И. Тихомиров", "Clasico Rusos", 3, new Date(1980, 6, 12));
const cancion6 = new Cancion(6, "Волны", "Molchat Doma", "On My Own", "Clasicos Rusos", 3, new Date(1960, 2, 8));


// crear lista de reproduccion
const listaReproduccion = new ListaCanciones();
listaReproduccion.nombre = "Clasicos";
listaReproduccion.fechaCreacion = new Date(2023, 1, 13);
listaReproduccion.agregarCancion(cancion1);
listaReproduccion.agregarCancion(cancion2);
listaReproduccion.reproducirCancion(cancion3);
listaReproduccion.reproducirCancion(cancion4);
listaReproduccion.descargarCancion(cancion6);
listaReproduccion.descargarCancion(cancion1);

// cambiar nombre de la lista de reproduccion
listaReproduccion.cambiarNombre(listaReproduccion);

// eliminar cancion de la lista de reproduccion
listaReproduccion.eliminarCancion(cancion1);


console.log(listaReproduccion);