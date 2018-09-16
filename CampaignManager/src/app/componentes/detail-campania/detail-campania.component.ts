import { Component, OnInit } from '@angular/core';
import { CampaniasService } from '../../servicios/campanias.service';
import { AudienciaService } from '../../servicios/audiencia.service';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-detail-campania',
  templateUrl: './detail-campania.component.html',
  styleUrls: ['./detail-campania.component.css']
})
export class DetailCampaniaComponent implements OnInit {
  public nuevacampania = {nombre: "",engagement:0, change:0};
  public campania = null;
  public audiencias = null;
  public tipoCampania;  
  public selectedValue = "";
  public nuevaAudiencia = {nombre: ""};

  public segmento1 = 0;
  public segmento2 = 0;
  public segmento3 = 0;
  public segmento4 = 0;
  public segmento5 = 0;
  public segmento6 = 0;
  public segmento7 = 0;

  constructor(private campaniasService:CampaniasService, private audienciaService:AudienciaService, private clientesService:ClientesService) { }

  ngOnInit() {
    this.campania = this.campaniasService.campaniaActual();
    this.audiencias = this.audienciaService.getAudiencias();
    this.obtenerClientesPorSegmento();
  }

  public crearCampania(){
    this.campaniasService.crearCampania(this.nuevacampania);
  }

  public crearAudiencia(){
    this.audienciaService.crearAudiencia(this.nuevaAudiencia);
  }

  public obtenerClientesPorSegmento(){
    let segmento1 = 0;
    let segmento2 = 0;
    let segmento3 = 0;
    let segmento4 = 0;
    let segmento5 = 0;
    let segmento6 = 0;
    let segmento7 = 0;
    

    this.clientesService.obtenerClientes().subscribe(data => {
      console.log(data);
      data.forEach(function(element) {
        console.log(element.segment);
        switch(element.segment) {
          case "seg_1":
            segmento1 ++;
            break;
          case "seg_2":
            segmento2 ++;
            break;
          case "seg_3":
            segmento3 ++;
            break;
          case "seg_4":
            segmento4 ++;
            break;
          case "seg_5":
            segmento5 ++;
            break;
          case "seg_6":
            segmento6 ++;
            break;
          case "seg_7":
            segmento7 ++;
            break;
        }        
      });
      this.segmento1 = segmento1;
      this.segmento2 = segmento2;
      this.segmento3 = segmento3;
      this.segmento4 = segmento4;
      this.segmento5 = segmento5;
      this.segmento6 = segmento6;
      this.segmento7 = segmento7;      
      
    });
  }
  

}
