import { Observable } from 'rxjs'; // Asegúrate de importar Observable


export interface CanComponentDeactivate {
    canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;
  }