import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DescripcionCampaniaComponent } from './componentes/descripcion-campania/descripcion-campania.component';
import { DetailCampaniaComponent } from './componentes/detail-campania/detail-campania.component';
import { CrearAudienciaComponent } from './componentes/crear-audiencia/crear-audiencia.component';

// Rutas de la Aplicacion
import { AppRoutingModule } from './app-routing.module';

//Servicios de la Aplicacion
import { CampaniasService } from './servicios/campanias.service';
import { AudienciaService } from './servicios/audiencia.service';
import { ClientesService } from './servicios/clientes.service';



@NgModule({
  declarations: [
    AppComponent,
    DescripcionCampaniaComponent,    
    DetailCampaniaComponent, 
    CrearAudienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CampaniasService, AudienciaService, ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
