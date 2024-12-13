import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubService } from '../../services/github.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../login/login.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

  subsDatos! : Subscription;
  usuario! : string;
  imagen! : string;
  cantidadRepos! : string;
  menuOpen: boolean = false; // Variable para controlar el estado del menú
  isChoferesOpen = false;
  isVehiculosOpen = false;
  isInformesOpen = false; // Control para desplegar el menú de choferes al hacer clic
 
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
      this.menuOpen = !this.menuOpen;
    }

    // Método para alternar la visibilidad de los dropdowns
  toggleDropdown(menu: string) {
    // Cerrar todos los menús y abrir solo el que corresponde
    this.isChoferesOpen = menu === 'choferes' ? !this.isChoferesOpen : false;
    this.isVehiculosOpen = menu === 'vehiculos' ? !this.isVehiculosOpen : false;
    this.isInformesOpen = menu === 'informes' ? !this.isInformesOpen : false;
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


  InformesVehiculos(ruta : string){
    if(this.authService.getUser() != null){
       this.router.navigate([`/informes-vehiculos/${ruta}`]);
    }else{
      this.router.navigateByUrl("login")
    }

  }

      // Método para navegar a una sección sin necesidad de estar logueado
    NavegarChoferesSinAcceso(ruta: string): void {
    this.router.navigate([`/productos/${ruta}`]); // Redirige al listado público
   }
  }