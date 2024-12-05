import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Vehiculo } from '../../../models/vehiculo';
import { VehiculoService } from '../../../services/vehiculo.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tabla-vehiculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-vehiculos.component.html',
  styleUrl: './tabla-vehiculos.component.css'
})
export class TablaVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  @Output() vehiculoSeleccionado = new EventEmitter<Vehiculo>(); // Emitir el vehículo seleccionado
  @Output() vehiculoEliminado = new EventEmitter<void>(); // Evento para eliminar

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    this.vehiculoService.obtenerVehiculos().subscribe((data: Vehiculo[]) => {
      this.vehiculos = data; // Aquí usamos vehiculos en lugar de listaVehiculos
    });
  }

  // Método que se llama al hacer clic en un vehículo
  seleccionarVehiculo(vehiculo: Vehiculo) {
    this.vehiculoSeleccionado.emit(vehiculo); // Emitir el evento con el vehículo seleccionado
  }

  async eliminarVehiculo(id: string) {
    await this.vehiculoService.eliminarVehiculo(id);
    this.vehiculoEliminado.emit(); // Emitir evento al eliminar
    this.cargarVehiculos(); // Recargar vehículos después de eliminar
  }

}