import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router'; // Importa Router para redirigir
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";



@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  
  // newUserNombre: string = '';
  // newUserApellido: string = '';
  // newUserEdad: number | null = null;

  newUserMail: string = '';
  newUserPWD: string = '';
  flagError: boolean = false;
  msjError: string = '';
  msjExito: string = '';
  acceptedTerms: boolean = false;

  loggedUser: string = '';

 

  constructor(public auth: Auth, private router: Router) {} // Inyectar Router



 
  Register() {
    this.flagError = false; // Reinicia el estado de error
  
    // Validaciones básicas
    if (!this.newUserPWD) {
      this.flagError = true;
      this.msjError = 'Todos los campos son requeridos.';
      return;
    }

    
    
    if (this.newUserPWD.length < 6) {
      this.flagError = true;
      this.msjError = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }
  
    // Guardar datos temporalmente (localStorage o servicio)
    localStorage.setItem(
      'tempUser',
      JSON.stringify({
             password: this.newUserPWD
      })
    );
  
    // Redirigir a la página de términos y condiciones
    this.msjExito = 'Redirigiendo para aceptar los términos...';
    setTimeout(() => {
      this.router.navigate(['/terminos']); // Asegúrate de que esta ruta exista
    }, 2000);
  }
  




  
  /*Esta registro funciona no tiene acepta terminos y condiciones
  Register() {
    createUserWithEmailAndPassword(this.auth, this.newUserMail, this.newUserPWD)
      .then((res) => {
        if (res.user.email !== null) {
          this.loggedUser = res.user.email;
          // Redirigir al usuario al home después del registro exitoso
          this.flagError = false;
             // Mostrar el mensaje de éxito
             this.msjExito = 'Usuario registrado con éxito';
          
             // Esperar 2 segundos antes de redirigir al home
             setTimeout(() => {
               this.router.navigate(['/bienvenida']);
             }, 2000); // 2000 milisegundos = 2 segundos
           }
          
                   
      })
      .catch((e) => {
        this.flagError = true;

        console.log(e)

        //manejo de errores
        switch (e.code) {
          case 'auth/invalid-email':
            this.msjError = 'Email invalido';
            break;
          case 'auth/email-already-in-use':
            this.msjError = 'Email ya en uso';
            break;
          case 'auth/weak-password':
            this.msjError = 'La contraseña debe ser de mas de 6 caracteres';
            break;
          case 'auth/missing-password':
            this.msjError = 'Por favor introduzca una contraseña';
            break;
          default:
            this.msjError = e.code;
            break;
        }
      });
  }

  */


  /*Este registro tiene el acepta termino y condiciones*/
  // Register() {
  //   // Validaciones de correo y contraseña
  //   if (!this.newUserMail || !this.newUserPWD) {
  //     this.flagError = true;
  //     this.msjError = 'Todos los campos son requeridos.';
  //     return;
  //   }

  //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   if (!emailPattern.test(this.newUserMail)) {
  //     this.flagError = true;
  //     this.msjError = 'Por favor ingrese un correo electrónico válido.';
  //     return;
  //   }

  //   if (this.newUserPWD.length < 6) {
  //     this.flagError = true;
  //     this.msjError = 'La contraseña debe tener al menos 6 caracteres.';
  //     return;
  //   }

  //   // Registrar usuario en Firebase
  //   createUserWithEmailAndPassword(this.auth, this.newUserMail, this.newUserPWD)
  //     .then((res) => {
  //       if (res.user.email !== null) {
  //         this.loggedUser = res.user.email;
  //         // Redirigir al usuario a la página de aceptación de términos después de un registro exitoso
  //         this.flagError = false;
  //         this.msjExito = 'Usuario registrado con éxito. Redirigiendo para aceptar los términos...';
          
  //         // Esperar 2 segundos antes de redirigir a la página de términos
  //         setTimeout(() => {
  //           this.router.navigate(['/terminos']); // Redirige a la página de aceptación de términos
  //         }, 2000);
  //       }
  //     })
  //     .catch((e) => {
  //       this.flagError = true;
  //       console.log(e)

  //       // Manejo de errores
  //       switch (e.code) {
  //         case 'auth/invalid-email':
  //           this.msjError = 'Email inválido';
  //           break;
  //         case 'auth/email-already-in-use':
  //           this.msjError = 'Email ya en uso';
  //           break;
  //         case 'auth/weak-password':
  //           this.msjError = 'La contraseña debe tener más de 6 caracteres';
  //           break;
  //         case 'auth/missing-password':
  //           this.msjError = 'Por favor introduzca una contraseña';
  //           break;
  //         default:
  //           this.msjError = e.code;
  //           break;
  //       }
  //     });
  // }
  
}

 

