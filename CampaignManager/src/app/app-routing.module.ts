import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { DescripcionCampaniaComponent } from './componentes/descripcion-campania/descripcion-campania.component'; 

const routes: Routes = [    
  { path: 'dash', component: DescripcionCampaniaComponent },  
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
