import { ICancion } from "./ICancion";

export class Cancion implements ICancion {
    id: number;
    titulo: string;
    artista: string;
    album: string;
    genero: string;
    duracion: number;
    fechaLanzamiento: Date;
    constructor(id: number, titulo: string, artista: string, album: string, genero: string, duracion: number, fechaLanzamiento: Date) {
        this.id = id;
        this.titulo = titulo;
        this.artista = artista;
        this.album = album;
        this.genero = genero;
        this.duracion = duracion;
        this.fechaLanzamiento = fechaLanzamiento;
    }
}   