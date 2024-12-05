import { Component, Input} from '@angular/core';
import { Pais } from '../../../models/pais';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css'],  // Asegúrate de que sea 'styleUrls' en plural
})
export class DetallePaisComponent {
  @Input() pais: Pais | null = null;

//   ngOnInit() {
//     console.log(this.pais); // Esto te permitirá ver el contenido del objeto 'pais'.
// }
}


