import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubService } from '../../services/github.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login/login.component";
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent implements OnInit, OnDestroy {

  subsDatos! : Subscription;
  usuario! : string;
  imagen! : string;
  cantidadRepos! : string;
  isMenuOpen: boolean = false; // Variable para controlar el estado del menú

 
   constructor(public authService: AuthService, private gitServ: GithubService, private router: Router) {}

    ngOnInit(): void {
      this.gitServ.obtenerDatosUsuario(); // Llamar aquí también es bueno para asegurarte
      this.subsDatos = this.gitServ.datos.subscribe(respuesta => {
        this.usuario = respuesta.login;
        this.imagen = respuesta.avatar_url;
        this.cantidadRepos = respuesta.public_repos;
      });

     
    
    }

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Alterna entre abrir/cerrar el menú
    }
  
    ngOnDestroy() {
      this.subsDatos.unsubscribe();
    }

      // Método para cerrar sesión
  logout() {
    this.authService.logout();
  }

   // Método para navegar a un juego específico
   NavegarChoferes(ruta : string){
    if(this.authService.getUser() != null){
       this.router.navigate([`/choferes/${ruta}`]);
    }else{
      this.router.navigateByUrl("login")
    }

  }
      // Método para navegar a una sección sin necesidad de estar logueado
    NavegarChoferesSinAcceso(ruta: string): void {
    this.router.navigate([`/productos/${ruta}`]); // Redirige al listado público
   }
  }
