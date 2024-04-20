import {familia} from './info.js';
import {Personaje} from './personaje.js';
const tablaSnoopy: HTMLElement = document.getElementById('familia')!;
function crearTabla(familia: Personaje[], tabla: HTMLElement): void {
    for (let familiar of familia) {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td><b>${familiar.getID()}</b></td>
            <td>${familiar.getNombre()}</td>
            <td>${familiar.getFecha()}</td>
            <td>${familiar.getImagen()}</td>
        `;
        tabla.appendChild(fila);
    }
}
crearTabla(familia, tablaSnoopy);
/*
familia.forEach((perrillo) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${perrillo.getID}</td>
                           <td><a href="${perrillo.getNombre}" target="_blank">${perrillo.getFecha}</a></td>
                           <td>${perrillo.getFecha}</td>
                           <td>${perrillo.getImagen}</td>`;
    tabla.appendChild(trElement);
    //totalSeasons += s.seasons;
  });*/