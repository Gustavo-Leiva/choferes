import { Component, Input } from '@angular/core';
import { Chofer } from '../../../models/chofer';

@Component({
  selector: 'app-detalle-chofer',
  standalone: false,
  // imports: [],
  templateUrl: './detalle-chofer.component.html',
  styleUrl: './detalle-chofer.component.css'
})
export class DetalleChoferComponent {

  @Input() chofer: Chofer | null = null;

}
