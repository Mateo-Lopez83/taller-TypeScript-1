import {Personaje} from './personaje.js';

export const familia=[
    new Personaje(
        1,
        "Spike",
        "Agosto 1975",
        "https://scontent.fbog3-2.fna.fbcdn.net/v/t39.30808-6/238001941_10159666633508054_5339891481259900303_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFYMrsrXrUo05IRYqVdCunnBsVs9eSqWVQGxWz15KpZVJGPZC7A0iQP4ygZmZI38go&_nc_ohc=9drTfRYRlesAb4Nl90T&_nc_ht=scontent.fbog3-2.fna&oh=00_AfAXbb8wEnVpFKNb041yYPXSdw3CHUR8e5hc_sJQFBeuOQ&oe=66292CC9"
    ),
    new Personaje(
        2,
        "Andy",
        "Febrero 1994",
        "https://pbs.twimg.com/media/DzYhrEeUcAAsC4Y.jpg"
    ),
    new Personaje(
        3,
        "Marbles",
        "Septiembre 1982",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8Q1tlcbyeDnEP8yrhk_56UJb_wHL3anl1kPRO3860A&s"
    )
]
//export const info = familia.map(esnupi => new personaje(esnupi.id,esnupi.nombre,esnupi.Primera_ap,esnupi.imagen_principal))