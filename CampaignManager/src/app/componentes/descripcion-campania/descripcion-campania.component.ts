import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaniasService } from '../../servicios/campanias.service';


@Component({
  selector: 'app-descripcion-campania',
  templateUrl: './descripcion-campania.component.html',
  styleUrls: ['./descripcion-campania.component.css']
})
export class DescripcionCampaniaComponent implements OnInit {

  public campanias: any;

  constructor(private router:Router, private campaniasService:CampaniasService) { }

  ngOnInit() {
    this.campanias = this.campaniasService.getCampanias();
  }
  
  

  public irADetalle(compania) {
    this.campaniasService.seleccionarCampania(compania);
    this.router.navigate(['/detail']);
  } 

  

}
