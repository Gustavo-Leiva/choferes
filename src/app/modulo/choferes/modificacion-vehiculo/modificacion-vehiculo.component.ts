import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vehiculo } from '../../../models/vehiculo';
import { CommonModule } from '@angular/common';
import { VehiculoService } from '../../../services/vehiculo.service';

@Component({
  selector: 'app-modificacion-vehiculo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modificacion-vehiculo.component.html',
  styleUrls: ['./modificacion-vehiculo.component.css'] // Corrige "styleUrl" a "styleUrls"
})
export class ModificacionVehiculoComponent implements OnInit, OnChanges {
  @Input() vehiculo!: Vehiculo  | null; // Permitir que vehiculo sea null; // Recibe el vehículo seleccionado
  vehiculoForm: FormGroup;
  isLoading: boolean = false;
  completed: boolean = false;
  submitted: boolean = false;
  msjError: string = '';
  vehiculos: any;

  onVehiculoEliminado() {
    this.resetearContenedorModificacion();
  }

  resetearContenedorModificacion() {
    this.vehiculos = null; // Restablecer el vehículo
    // Aquí también podrías ocultar el contenedor de modificación si es necesario
  }

  constructor(private fb: FormBuilder, private vehiculoService: VehiculoService) {
    this.vehiculoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      tipo: ['', Validators.required],
      cantidadRuedas: ['', [Validators.required, Validators.max(6)]],
      capacidad: ['', [Validators.required, Validators.min(2), Validators.max(100)]],
    });
  }
  

  ngOnInit(): void {
    this.cargarDatosVehiculo();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vehiculo'] && changes['vehiculo'].currentValue) {
      this.cargarDatosVehiculo();
    } else if (!this.vehiculo) {
      this.vehiculoForm.reset(); // Limpiar el formulario si no hay vehículo
     }
  }

  cargarDatosVehiculo() {
    if (this.vehiculo) {
      this.vehiculoForm.patchValue({
        nombre: this.vehiculo.nombre,
        tipo: this.vehiculo.tipo,
        cantidadRuedas: this.vehiculo.cantidadRuedas,
        capacidad: this.vehiculo.capacidad,
      });
    }
  }

  async modificarVehiculo() {
    if (this.vehiculo && this.vehiculoForm.valid) {
      this.isLoading = true; // Activa el spinner
      this.completed = false; // Asegúrate de ocultar el mensaje previo
      try {
        await this.vehiculoService.modificarVehiculo(this.vehiculo.id, this.vehiculoForm.value);
        console.log('Vehículo modificado correctamente');
        this.vehiculoForm.reset();
        this.completed = true; // Muestra el mensaje de éxito
      } catch (error) {
        console.error('Error al modificar el vehículo:', error);
      } finally {
        this.isLoading = false; // Desactiva el spinner
      }
    }
  }

  closeMessage() {
    this.completed = false; // Oculta el mensaje de éxito
  }
}
