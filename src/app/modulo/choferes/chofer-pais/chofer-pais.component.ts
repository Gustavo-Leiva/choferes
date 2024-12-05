import { Component } from '@angular/core';
import { Chofer } from '../../../models/chofer';
import { Pais } from '../../../models/pais';
import { ChoferService} from '../../../services/chofer.service';
import { PaisService} from '../../../services/pais.service';
// import { NgIf } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DetalleChoferComponent } from '../detalle-chofer/detalle-chofer.component';




@Component({
  selector: 'app-chofer-pais',
  standalone: false,
  // imports: [],
  templateUrl: './chofer-pais.component.html',
  styleUrl: './chofer-pais.component.css'
})
export class ChoferPaisComponent {

  choferSeleccionado: Chofer | null = null;
  pais: Pais | null = null;
  paises: Pais[] = [];
  searchText: string = '';

  constructor(
    private choferService: ChoferService,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.paisService.traerPaises().subscribe((paises) => {
      this.paises = paises;
    });
  }

  seleccionarChofer(chofer: Chofer) {
    this.choferSeleccionado = chofer;
    // this.pais = this.paisService.getPaisOrigen(chofer.paisOrigen); // Utiliza el método del servicio
    this.pais = this.getPaisOrigen(chofer.paisOrigen);
    console.log(this.choferSeleccionado);
  }

  getPaisOrigen(nombre: string): Pais | null {
    return this.paises.find(
      (pais) => pais.nombre.toLowerCase() === nombre.toLowerCase()
    ) || null;
  }

}
