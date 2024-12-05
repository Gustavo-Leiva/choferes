import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ChoferesRoutingModule } from './choferes-routing.module';
import { AltaChoferComponent } from '../../modulo/choferes/alta-chofer/alta-chofer.component';
import { ListadosChoferesComponent } from './listados-choferes/listados-choferes.component';
import { ChoferPaisComponent } from './chofer-pais/chofer-pais.component';
import { DetalleChoferComponent } from './detalle-chofer/detalle-chofer.component';
import { environment } from '../../environments/environment'; // Importa el archivo de environment
import { ChoferService } from '../../services/chofer.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { TablaVehiculosComponent } from "./tabla-vehiculos/tabla-vehiculos.component";
import { AltaVehiculoComponent } from "./alta-vehiculo/alta-vehiculo.component";
import { ModificacionVehiculoComponent } from "./modificacion-vehiculo/modificacion-vehiculo.component";
import { BajaVehiculoComponent } from "./baja-vehiculo/baja-vehiculo.component";
import { HeaderComponent } from "../../componentes/header/header.component";

@NgModule({
  declarations: [

    AltaChoferComponent,
    ListadosChoferesComponent,
    DetalleChoferComponent,
    ChoferPaisComponent,
    //VehiculosComponent,
    

  ],


  imports: [
    CommonModule,
    ChoferesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // Inicializa Firebase
    AngularFirestoreModule,
    DetallePaisComponent,
    TablaVehiculosComponent,
    AltaVehiculoComponent,
    ModificacionVehiculoComponent,
    BajaVehiculoComponent,
    HeaderComponent
],

  providers: [ChoferService],
})
export class ChoferesModule { }
