import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import  'rxjs/add/observable/throw';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';

@Injectable()
export class ClientesService {  

  constructor(private http: Http) { }

  public obtenerClientes(): Observable<any>{
    return this.http.get('assets/mockSegments.json').map(this.extraerDatos).catch(this.manejarError);
  }

  private extraerDatos(res: Response) {
    return res.json() || { };
  }

  private manejarError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
