import { Component, OnInit } from '@angular/core';
import { Pais } from '../../../models/pais';
import { PaisService } from '../../../services/pais.service';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-alta-chofer',
  standalone: false,
  // imports: [],
  templateUrl: './alta-chofer.component.html',
  styleUrl: './alta-chofer.component.css'
})
export class AltaChoferComponent implements OnInit {
  paises: Pais[] = [];
  paisSeleccionado: Pais | null = null;
  choferForm: FormGroup;
  submitted: boolean = false;
  isLoading = false;
  completed = false;


  constructor(
    private paisService: PaisService,
    private fb: FormBuilder,
    private authService: AuthService,
    private firestore: Firestore, 
  ) {
    this.choferForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(50)]],
      nrolicencia: ['', [Validators.required, Validators.minLength(7), Validators.pattern('^[0-9]+$')]],
      licencia: [false], // Checkbox
      paisOrigen: ['', Validators.required]
    });
  }

  ngOnInit(): void {
      // Cargar todos los países al inicializar el componente
    this.cargarPaises(); 
    
    //Cargar solo los paises de un continente
    // this.paisService.obtenerPaisesPorContinente('Americas').subscribe(paisesAmerica => {
    //   this.paises = paisesAmerica;
    //   console.log(this.paises);
    // });
  }

  cargarPaises(): void {
    this.paisService.traerPaises().subscribe(paises => {
      this.paises = paises;
      console.log(this.paises);
    });
  }

  seleccionarPais(pais: Pais): void {

    this.paisSeleccionado = pais;
    this.choferForm.patchValue({ paisOrigen: pais.codigo }); // Asigna el código del país al formulario
  }


  async altaChofer() {
    this.submitted = true; // Indicar que el formulario ha sido enviado
    this.choferForm.markAllAsTouched(); // Marcar todos los campos como tocados

    if (this.choferForm.invalid) {
      // this.productoForm.markAllAsTouched(); // Marcar todos los campos como tocados
      return; // Salir si el formulario es inválido
    }

    const usuarioId = this.authService.getUser()?.uid;

    if (usuarioId) {

      this.isLoading = true; // Mostrar el spinner

      try {
        const choferesCollection = collection(this.firestore, 'choferes'); // 


         // Transformar el valor de licencia a "sí" o "no"
        const licenciaValor = this.choferForm.value.licencia ? 'sí' : 'no';

        // Obtener el nombre del país seleccionado
      const nombrePais = this.paisSeleccionado ? this.paisSeleccionado.nombre : '';

        await addDoc(choferesCollection, {
          ...this.choferForm.value,
          licencia: licenciaValor, // Usar el valor transformado
          paisOrigen: nombrePais, // Almacenar el nombre del país
          usuarioId: usuarioId,
          timestamp: new Date()
        });

        // Limpiar el formulario después de enviar
        this.choferForm.reset();
        this.submitted = false; // Restablecer la bandera de enviado
        this.paisSeleccionado = null; // Limpiar el país seleccionado
        // Mostrar el mensaje de encuesta completada
        this.completed = true;

        // Simula una espera para el spinner y el mensaje de confirmación
        setTimeout(() => {
          this.isLoading = false; // Ocultar el spinner
          // Ya no redirigimos al home
          this.completed = true; // Mostrar el mensaje de confirmación
        }, 1000); //Espera 2 segundos antes de ocultar el spinner

        // Aquí puedes agregar lógica adicional como un mensaje de éxito
      } catch (error) {
        this.isLoading = false; // Asegurarse de ocultar el spinner en caso de error
        console.error('Error al dar de alta chofer: ', error);
      }
    } else {
      // Manejar el caso en que no hay usuario logueado
      console.warn('No hay usuario logueado');
    }
  }

  onPaisChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
  
    if (selectElement) {
      const codigoPais = selectElement.value; // Accedemos al valor
  
      const paisSeleccionado = this.paises.find(p => p.codigo === codigoPais);
      if (paisSeleccionado) {
        this.paisSeleccionado = paisSeleccionado;
        this.choferForm.patchValue({ paisOrigen: codigoPais });
      }
    } else {
      console.error('El elemento select no se encontró');
    }
  }
  
 
  
  
  
}
