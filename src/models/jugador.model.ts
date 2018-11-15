
export class Jugador{
    
    
    id: number;
    nombre: string;
    apellidos: string;
    telefono: number;
    elo: number;
    partidas: number;
    pc: number;
    pf: number;
    ganadas: number;
    empatadas: number;
    perdidas: number;
    puntos: number;



    constructor(id:number,nombre: string, apellidos: string, elo:number, telefono: number,partidas: number, 
        pc: number,pf: number,ganadas: number, empatadas: number, perdidas: number,puntos: number){
       
            this.id=id
            this.nombre=nombre
            this.apellidos=apellidos
            this.elo=elo
            this.telefono=telefono
            this.partidas=partidas
            this.pc=pc
            this.pf=pf
            this.ganadas=ganadas
            this.empatadas=empatadas
            this.perdidas=perdidas
            this.puntos=puntos

        }
       

}