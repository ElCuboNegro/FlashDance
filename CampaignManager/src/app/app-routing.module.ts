import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { DescripcionCampaniaComponent } from './componentes/descripcion-campania/descripcion-campania.component'; 
import { DetailCampaniaComponent } from './componentes/detail-campania/detail-campania.component';

const routes: Routes = [    
  { path: 'dash', component: DescripcionCampaniaComponent },  
  { path:'detail', component:DetailCampaniaComponent},
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
