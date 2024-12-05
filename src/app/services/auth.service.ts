import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; // Asegúrate de importar Firestore
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userActive: User | null = null;
  isLoading = false; // Indica si se está realizando el login
  userRole: string = ""; // Guarda el rol del usuario

  constructor(public auth: Auth, private router: Router, private firestore: Firestore) {
    this.auth.onAuthStateChanged(user => {
      this.userActive = user;
   // Restaurar el rol desde localStorage
   if (user) {
    this.userRole = localStorage.getItem('userRole') || '';
  } else {
    this.userRole = '';
  }
  });
}

  

   // Método para iniciar sesión
   async Login(email: string, password: string): Promise<void> {
    this.isLoading = true; // Iniciar la carga
    try {
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      this.userActive = result.user;

       // Simulación de roles basada en el correo electrónico
       if (email === "admin@gmail.com") {
        this.userRole = "admin";
      } else {
        this.userRole = "empleado";
      }

      // Guardar el rol en localStorage
      localStorage.setItem('userRole', this.userRole);

      // Guardar en la colección 'logins' en Firestore
      const loginsCollection = collection(this.firestore, 'logins');
      await addDoc(loginsCollection, {
        userId: result.user.uid,
        email: result.user.email,
        loginTime: new Date() // Guarda la fecha y hora del login
      });
      
      // Redirigir o hacer cualquier otra acción después del login si es necesario
       // Redirigir a la página de bienvenida después de iniciar sesión
     this.router.navigate(['/bienvenida']); // Asegúrate de que la ruta sea correcta

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error; // Lanza el error para que sea capturado en el componente
    } finally {
      this.isLoading = false; // Termina la carga
    }
  }

  // Método para cerrar sesión
  async logout(): Promise<void> {
    await signOut(this.auth);
    this.userActive = null;

    Swal.fire({
      title: '¡Hasta pronto!',
      text: 'Tu sesión ha sido cerrada correctamente.',
      icon: 'success',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#38b6ff',
      background: '#f8f9fa',
      customClass: {
        popup: 'swal-popup'
      }
    });
  
    this.router.navigate(['/bienvenida']); // Redirige al home después de cerrar sesión
    this.userRole = "";
  }

  isAdmin(): boolean {
    return this.userRole === "admin";
  }

 
   // Método para verificar si el usuario está autenticado
   isLoggedIn(): boolean {
    return this.userActive !== null;
  }

   getUser() {
    return this.userActive;
  }

  getUserEmail(){
    return this.userActive ? this.userActive.email : null;
  }

 

}
