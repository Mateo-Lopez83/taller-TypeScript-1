export class Personaje{
    id:number;
    nombre: string;
    Primera_ap: string;
    imagen_principal :string;
    //hermanes:Array<string>;
    constructor(id:number, nombre:string, primera_ap:string, imagen:string,){
        this.id = id;
        this.nombre=nombre;
        this.Primera_ap= primera_ap;
        this.imagen_principal=imagen;
        //this.hermanes= hermanes;
    }
    
    imagenizador_de_imagen_ador():string{
        return `${this.imagen_principal}`
    }
    public getID():number{
        return this.id;
    }
    public getNombre():string{
        return this.nombre;
    }
    public getFecha():string{
        return this.Primera_ap;
    }
    public getImagen():string{
        return this.imagen_principal;
    }

}