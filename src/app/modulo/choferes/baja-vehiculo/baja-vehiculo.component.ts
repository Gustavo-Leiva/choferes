import { Component, EventEmitter,Input, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../componentes/header/header.component";

@Component({
  selector: 'app-baja-vehiculo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent],
  templateUrl: './baja-vehiculo.component.html',
  styleUrl: './baja-vehiculo.component.css'
})
export class BajaVehiculoComponent implements OnChanges {
  // @Input() vehiculo!: Vehiculo; // Recibe el vehículo seleccionado desde el componente padre
  @Input() vehiculo: Vehiculo | null = null; // Permitir valores nulos
  @Output() vehiculoEliminado = new EventEmitter<void>();// Evento para emitir cuando se elimine el vehículo
  bajaForm: FormGroup;
  isLoading: boolean = false;
  completed: boolean = false;
  submitted: boolean = false;
  msjError: string = '';

  constructor(private fb: FormBuilder, private vehiculoService: VehiculoService) {
    this.bajaForm = this.fb.group({
      nombre: [{ value: '', disabled: true }],  // Deshabilitado desde el inicio
      tipo: [{ value: '', disabled: true }],    // Deshabilitado desde el inicio
      cantidadRuedas: [{ value: '', disabled: true }],  // Deshabilitado desde el inicio
      capacidad: [{ value: '', disabled: true }], // Deshabilitado desde el inicio
      confirmarBaja: [false, Validators.requiredTrue] // Checkbox habilitado
    });
  }

  ngOnInit(): void {
    this.cargarDatosVehiculo();
  }

  ngOnChanges(): void {
    this.cargarDatosVehiculo(); // Cargar datos al cambiar el vehículo seleccionado
  }
 
  cargarDatosVehiculo(): void {
    if (this.vehiculo) {
      this.bajaForm.patchValue({
        nombre: this.vehiculo.nombre,
        tipo: this.vehiculo.tipo,
        cantidadRuedas: this.vehiculo.cantidadRuedas,
        capacidad: this.vehiculo.capacidad
      });
    } else {
      this.bajaForm.reset(); // Limpia el formulario si no hay un vehículo
    }
  }

  // bajarVehiculo(): void {
  //   if (this.bajaForm.valid && this.vehiculo) {
  //     this.isLoading = true; // Activa el spinner
  //     this.completed = false; // Oculta cualquier mensaje previo
  //     this.vehiculoService.eliminarVehiculo(this.vehiculo.id).then(() => {
  //       console.log('Vehículo eliminado con éxito');
  //       this.completed = true; // Muestra el mensaje de éxito
  //       this.bajaForm.reset(); // Reinicia el formulario
  //     }).catch(error => {
  //       console.error('Error al eliminar el vehículo:', error);
  //     }).finally(() => {
  //       this.isLoading = false; // Desactiva el spinner
  //     });
  //   }
  // }

  
  bajarVehiculo(): void {
    if (this.bajaForm.valid && this.vehiculo) {
      this.isLoading = true;
      this.completed = false;
      this.vehiculoService.eliminarVehiculo(this.vehiculo.id).then(() => {
        console.log('Vehículo eliminado con éxito');
        this.completed = true;
        this.bajaForm.reset();

        // Emitir evento para notificar que el vehículo ha sido eliminado
        this.vehiculoEliminado.emit();
        
      }).catch(error => {
        console.error('Error al eliminar el vehículo:', error);
      }).finally(() => {
        this.isLoading = false;
      });
    }
  }
  
  
  
  closeMessage() {
    this.completed = false; // Oculta el mensaje de éxito
  }
}

