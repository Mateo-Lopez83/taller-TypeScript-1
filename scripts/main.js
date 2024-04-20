"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tablaSnoopy = document.getElementById('familia');
function crearTabla(familiares) {
    for (let familiar of familiares) {
        let fila = document.createElement("tr");
        let titulo = document.createElement("td");
        fila.appendChild(document.createElement("td")).innerHTML = `<b>${familiar.getID()}</b>`;
        fila.appendChild(titulo);
        fila.appendChild(document.createElement("td")).innerText = familiar.getNombre();
        fila.appendChild(document.createElement("td")).innerText = familiar.getFecha();
        fila.appendChild(document.createElement("td")).innerText = familiar.getImagen();
        tablaSnoopy.appendChild(fila);
    }
}
