import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo';
import { AltaVehiculoComponent } from '../alta-vehiculo/alta-vehiculo.component';
import { BajaVehiculoComponent } from '../baja-vehiculo/baja-vehiculo.component';
import { ModificacionVehiculoComponent } from '../modificacion-vehiculo/modificacion-vehiculo.component';
import { TablaVehiculosComponent } from '../tabla-vehiculos/tabla-vehiculos.component';
import { HeaderComponent } from "../../../componentes/header/header.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [TablaVehiculosComponent, AltaVehiculoComponent, BajaVehiculoComponent, ModificacionVehiculoComponent, HeaderComponent, CommonModule],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent implements OnInit{
 
  // vehiculo!: Vehiculo ;  // Ahora vehiculo puede ser Vehiculo o null
 // Un objeto vacío de tipo Vehiculo // Acepta tanto un objeto de tipo Vehiculo como null
  vehiculo: Vehiculo  | null = null; 
  listaVehiculos: Vehiculo[] = []; // Propiedad para almacenar la lista de vehículos
 
 

  constructor(
    private vehiculoService: VehiculoService // Cambio para usar 'vehiculoService'
  ) { }

  ngOnInit(): void {
    this.cargarVehiculos(); // Llamar a cargarVehiculos al iniciar el componente
  }

  vehiculoSeleccionado(vehiculo:any){
    this.vehiculo = vehiculo;
    
  }
  


   

    // Método para cargar vehículos desde el servicio
  cargarVehiculos() {
    // Llama al servicio para obtener los vehículos
    this.vehiculoService.obtenerVehiculos().subscribe((data: Vehiculo[]) => {
      this.listaVehiculos = data; // Guardar los datos en listaVehiculos
      
    });
  }

   // Método para manejar el evento de eliminación de vehículo
  // Método para manejar el evento de eliminación de vehículo
  onVehiculoEliminado(): void {
    this.vehiculo = null; // Resetear el vehículo cuando se elimina
  }
 



}
