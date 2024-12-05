import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  
  public datos: Subject<any>;

  constructor(private http : HttpClient) {
    this.datos = new Subject();
    this.obtenerDatosUsuario(); // Llamar al método en el constructor del servicio
  }

  obtenerDatosUsuario(){
    this.http.get('https://api.github.com/users/gustavo-leiva').subscribe(respuesta => {this.datos.next(respuesta);});
  }
}
