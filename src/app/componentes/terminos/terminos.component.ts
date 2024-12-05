import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Importamos Firebase Auth
import { Firestore, doc, setDoc } from '@angular/fire/firestore'; // Importamos Firestore
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/can-component-deactivate.interface';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent implements OnInit, CanComponentDeactivate {
  userEmail: string = '';
  userPassword: string = '';
  userAge: number | null = null; // Campo para la edad
  acceptedTerms: boolean = false;
  flagError: boolean = false;
  msjError: string = '';
  msjExito: string = '';
  
  // userEmail: string = '';
  // userPassword: string = '';
  // acceptedTerms: boolean = false;
  // flagError: boolean = false;
  // msjError: string = '';
  // msjExito: string = '';

  private auth = getAuth();

  constructor(private router: Router, private firestore: Firestore) {} // Inyectar Firestore

  ngOnInit(): void {
    // Leer los datos del usuario desde el localStorage
    const tempUser = localStorage.getItem('tempUser');
    if (tempUser) {
      const { email, password } = JSON.parse(tempUser);
      this.userEmail = email;
      this.userPassword = password;
    } else {
      // Si no hay datos, redirigir al registro
      this.router.navigate(['/registro']);
    }
  }

  canDeactivate(): boolean {
    if (!this.acceptedTerms || !this.userAge || this.userAge < 18 || this.userAge > 65) {
      return confirm(
        'No has aceptado los términos o la edad es inválida. ¿Deseas salir sin completar el registro?'
      );
    }
    return true;
  }



  async acceptTerms() {
    if (!this.userAge || this.userAge < 18 || this.userAge > 65) {
      this.flagError = true;
      this.msjError = 'Debes ingresar una edad válida (18-65 años).';
      return;
    }

    if (!this.acceptedTerms) {
      this.flagError = true;
      this.msjError = 'Debes aceptar los términos y condiciones.';
      return;
    }

    try {
      this.msjExito = 'Términos aceptados. Redirigiendo...';
      localStorage.removeItem('tempUser'); // Limpia el almacenamiento temporal

      setTimeout(() => {
        this.router.navigate(['/bienvenida']); // Redirigir al Home
      }, 2000);
    } catch (error) {
      this.flagError = true;
      this.msjError = 'Ocurrió un error inesperado.';
    }
  }
}

  // Implementación del guard
  // canDeactivate(): boolean {
  //   if (!this.acceptedTerms) {
  //     return confirm(
  //       '¿Estás seguro de que deseas salir sin aceptar los términos y condiciones?'
  //     );
  //   }
  //   return true;
  // }

    // Método para aceptar los términos y registrar el usuario
  // Método para aceptar los términos y registrar el usuario
//   async acceptTerms() {
//     if (!this.acceptedTerms) {
//       this.flagError = true;
//       this.msjError = 'Debes aceptar los términos y condiciones.';
//       return;
//     }

//     try {
//       // Registrar al usuario en Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(this.auth, this.userEmail, this.userPassword);
      
//       const uid = userCredential.user.uid; // UID del usuario registrado

//       // Guardar datos del usuario en Firestore
//       await setDoc(doc(this.firestore, 'usuarios', uid), {
//         uid,
//         email: this.userEmail,
//         fechaRegistro: new Date().toISOString(), // Fecha actual
//         aceptoTerminos: true // Indicador de que aceptó los términos
//       });

//       // Mostrar mensaje de éxito y redirigir
//       this.msjExito = 'Términos aceptados y cuenta creada correctamente. Redirigiendo...';
//       localStorage.removeItem('tempUser'); // Eliminar datos temporales

//       setTimeout(() => {
//         this.router.navigate(['/bienvenida']); // Redirigir al home
//       }, 2000);
//     } catch (error: any) {
//       this.flagError = true;
      
//       // Manejamos el error de una manera más flexible
//       if (error?.code) {
//         switch (error.code) {
//           case 'auth/email-already-in-use':
//             this.msjError = 'Este correo ya está en uso.';
//             break;
//           case 'auth/invalid-email':
//             this.msjError = 'El correo electrónico no es válido.';
//             break;
//           case 'auth/weak-password':
//             this.msjError = 'La contraseña es demasiado débil.';
//             break;
//           default:
//             this.msjError = 'Ocurrió un error al crear la cuenta.';
//         }
//       } else {
//         this.msjError = 'Ocurrió un error inesperado, por favor intenta nuevamente.';
//       }
//     }
//   }
// }
