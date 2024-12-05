import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaChoferComponent } from '../../modulo/choferes/alta-chofer/alta-chofer.component';
import { ChoferPaisComponent } from './chofer-pais/chofer-pais.component';
import { ListadosChoferesComponent } from './listados-choferes/listados-choferes.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

const routes: Routes = [
  {path: 'alta-chofer', component: AltaChoferComponent},
  {path:'chofer-pais', component: ChoferPaisComponent},
  {path:'listados-choferes', component: ListadosChoferesComponent},
  {path:'detalle-pais',component: DetallePaisComponent},
  {path:'vehiculos', component:VehiculosComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoferesRoutingModule { }
