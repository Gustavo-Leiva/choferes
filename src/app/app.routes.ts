import { Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { VehiculosComponent } from './modulo/choferes/vehiculos/vehiculos.component'; // Ajusta la ruta según tu estructura
import { AdminGuard } from './guards/admin.guard'; // Asegúrate de importar el guard correctamente
import { TerminosComponent } from './componentes/terminos/terminos.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';  // Asegúrate de importar el guard 
import { InformesVehiculosComponent } from './componentes/informes-vehiculos/informes-vehiculos.component';

export const routes: Routes = [
    { path: '', redirectTo: '/bienvenida', pathMatch: 'full' }, // Redirige al home por defecto
    { path: 'bienvenida', component: BienvenidaComponent},
    { path: 'login', component: LoginComponent },
    { path:'registro', component: RegistroComponent},
    { path: 'error', component: ErrorComponent },
    { path: 'terminos', component: TerminosComponent, canDeactivate: [CanDeactivateGuard] },  // Ruta para los términos
    { path:'informes-vehiculos',component: InformesVehiculosComponent},

    {
        path: 'choferes',
        loadChildren:()=>import('./modulo/choferes/choferes.module').then(m =>m.ChoferesModule),
        // canActivate: [LoginGuard], // Aplicar el guard aca para todos los juegos
    
      },

      // {
      //   path: 'vehiculos',
      //   loadChildren: () => import('./modulo/choferes/choferes.module').then(m => m.ChoferesModule),
      //   canActivate: [VehiculosGuard], // Aplica el guard aquí
      // },

      {
        path: 'vehiculos',
        component: VehiculosComponent,
        canActivate: [AdminGuard], // Restricción de acceso para administradores
      },
      
      


    
     { path: '**', redirectTo: '/error' }, // Redireccionar cualquier ruta no encontrada al error
       



];
