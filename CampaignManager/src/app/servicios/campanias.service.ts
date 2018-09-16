import { Injectable } from '@angular/core';

@Injectable()
export class CampaniasService {

  public campanias = [{nombre: "Campaña 1",engagement:37859, change:50},{nombre: "Campaña 2",engagement:1758, change:45}, {nombre: "Campaña 3",engagement:1385,change:85}, {nombre: "Campaña 4",engagement:98421,change:38}];
  public campania = null;
  constructor() { }

  public getCampanias() {    
    return this.campanias;
  }

  public campaniaActual(){    
      return this.campania;
  }

  public seleccionarCampania(campania) {
    this.campania = campania
  }

  public crearCampania(campania){
    this.campanias.push(campania);
  }

}
