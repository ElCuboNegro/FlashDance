import { Injectable } from '@angular/core';

@Injectable()
export class AudienciaService {

  public audiencias = [{nombre: "Transacciones Nacionales"},{nombre: "Transacciones Internacionales"},{nombre: "Monto de Transacciones"}];

  constructor() { }

  public getAudiencias() {
    return this.audiencias;
  }

  public crearAudiencia(audiencia) {
    this.audiencias.push(audiencia); 
  }

}
