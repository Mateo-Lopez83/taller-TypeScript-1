"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaje = void 0;
class personaje {
    //hermanes:Array<string>;
    constructor(id, nombre, primera_ap, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.Primera_ap = primera_ap;
        this.imagen_principal = imagen;
        //this.hermanes= hermanes;
    }
    imagenizador_de_imagen_ador() {
        return `${this.imagen_principal}`;
    }
    getID() {
        return this.id;
    }
    getNombre() {
        return this.nombre;
    }
    getFecha() {
        return this.Primera_ap;
    }
    getImagen() {
        return this.imagen_principal;
    }
}
exports.personaje = personaje;
