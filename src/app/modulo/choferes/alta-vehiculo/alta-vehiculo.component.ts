import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehiculoService } from '../../../../app/services/vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../componentes/header/header.component";

@Component({
  selector: 'app-alta-vehiculo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './alta-vehiculo.component.html',
  styleUrl: './alta-vehiculo.component.css'
})
export class AltaVehiculoComponent {
  vehiculoForm: FormGroup;
  isLoading: boolean = false;
  completed: boolean = false;
  submitted: boolean = false;
  msjError: string = '';

  @Output() vehiculoAgregado = new EventEmitter<Vehiculo>();

  constructor(private fb: FormBuilder, private vehiculoService: VehiculoService) {
    this.vehiculoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      tipo: ['', Validators.required],
      cantidadRuedas: ['', [Validators.required, Validators.max(6)]],
      capacidad: ['', [Validators.required, Validators.min(2), Validators.max(100)]]
    });
  }

  // Método para agregar un vehículo
  onSubmit() {
    if (this.vehiculoForm.valid) {

      this.isLoading = true; // Muestra el spinner
      this.completed = false; // Asegúrate de ocultar el mensaje de éxito previo

      const nuevoVehiculo: Vehiculo = this.vehiculoForm.value;
    //   this.vehiculoService.agregarVehiculo(nuevoVehiculo);
    //   this.vehiculoAgregado.emit(nuevoVehiculo); // Emite el vehículo agregado
    //   this.vehiculoForm.reset(); // Limpia el formulario
    // }
    // Simula el proceso de agregar un vehículo (podrías usar un Observable o Promesa si `agregarVehiculo` los soporta)
    setTimeout(() => {
      this.vehiculoService.agregarVehiculo(nuevoVehiculo);
      this.vehiculoAgregado.emit(nuevoVehiculo); // Emite el vehículo agregado
      this.vehiculoForm.reset(); // Limpia el formulario
      this.isLoading = false; // Oculta el spinner
      this.completed = true; // Muestra el mensaje de éxito
    }, 2000); // Tiempo simulado de carga (ajústalo según tus necesidades)
  }
  }

  closeMessage() {
    this.completed = false; // Oculta el mensaje de éxito
  }
}