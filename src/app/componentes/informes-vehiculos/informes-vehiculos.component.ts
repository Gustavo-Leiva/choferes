import { HeaderComponent } from "../header/header.component";
import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Importa la extensión para tablas
import { VehiculoService } from '../../services/vehiculo.service'; // Ajusta el path según tu estructura
import { ChoferService } from "../../services/chofer.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-informes-vehiculos',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './informes-vehiculos.component.html',
  styleUrl: './informes-vehiculos.component.css'
})
export class InformesVehiculosComponent implements OnInit {
  vehiculos: any[] = []; // Aquí se almacenará la lista de vehículos
  choferes: any[] = []; // Aquí se almacenará la lista de vehículos

  constructor(private vehiculoService: VehiculoService, private choferService: ChoferService) {}

  ngOnInit(): void {
      // Suscribirse al observable para obtener la lista de vehículos
      this.vehiculoService.obtenerVehiculos().subscribe(data => {
      this.vehiculos = data;
    });

        // Suscribirse al observable para obtener la lista de choferes
    this.choferService.obtenerChoferes().subscribe(data => {
      this.choferes = data;
    });
    
  }

  generarPDFVehiculos(): void {
    const doc = new jsPDF();

    // Título del PDF
    doc.setFontSize(18);
    doc.text('Informe de Vehículos', 10, 10);

    // Configuración de columnas y datos
    const columnas = ['Nombre', 'Tipo', 'Cantidad Ruedas', 'Capacidad']; // Ajusta según tus campos
    const filas = this.vehiculos.map(v => [v.nombre, v.tipo, v.cantidadRuedas, v.capacidad,]);

    // Agrega la tabla al PDF
    (doc as any).autoTable({
      head: [columnas],
      body: filas,
      startY: 20
    });

    // Descargar el PDF
    doc.save('Informe_Vehiculos.pdf');
  }





generarPDFChoferes() {
  const doc = new jsPDF();

  // Título del documento
  doc.setFontSize(18);
  doc.text('Informe de Choferes', 14, 22);

  // Tabla de datos
  const columnas = ['Nombre', 'Edad', 'Numero Licencia', 'Licencia', 'Pais Origen'];
  const filas = this.choferes.map(chofer => [
    chofer.nombre,
    chofer.edad.toString(),
    chofer.nrolicencia,
    chofer.licencia,
    chofer.paisOrigen,
    // chofer.experiencia.toString()
  ]);

   // Usando el cast 'any' para llamar a autoTable
   (doc as any).autoTable({
    head: [columnas],
    body: filas,
    startY: 30,
    styles: { font: 'helvetica', fontSize: 10, cellPadding: 3 },
    headStyles: { fillColor: [60, 141, 188] }
  });

  // Guardar el PDF
  doc.save('Informe_Choferes.pdf');
}


generarCSVChoferes(): void {
  const columnas = ['Nombre', 'Edad', 'Número Licencia', 'Licencia', 'País de Origen'];

  // Convierte los datos de los choferes a formato CSV
  const filas = this.choferes.map(chofer => [
    chofer.nombre,
    chofer.edad,
    chofer.numeroLicencia || '',
    chofer.licencia,
    chofer.paisOrigen
  ]);

  // Encabezados y datos
  const contenidoCSV = [
    columnas.join(','), // Encabezados
    ...filas.map(fila => fila.join(',')) // Filas de datos
  ].join('\n');

  // Crear un Blob con BOM para UTF-8
  const bom = '\uFEFF'; // Indicador de Byte Order Mark
  const blob = new Blob([bom + contenidoCSV], { type: 'text/csv;charset=utf-8;' });

  // Crear un enlace temporal para descargar el archivo
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Listado_Choferes.csv';
  a.click();

  // Liberar recursos
  window.URL.revokeObjectURL(url);
}


generarCSVVehiculos(): void {
  const columnas = ['Nombre', 'Tipo', 'Cantidad de Ruedas', 'Capacidad']; // Ajusta según los campos de tu colección

  // Convierte los datos de los vehículos a formato CSV
  const filas = this.vehiculos.map(vehiculo => [
    vehiculo.nombre,
    vehiculo.tipo,
    vehiculo.cantidadRuedas || '', // Sustituir valores nulos o indefinidos
    vehiculo.capacidad || ''
  ]);

  // Encabezados y datos
  const contenidoCSV = [
    columnas.join(','), // Encabezados
    ...filas.map(fila => fila.join(',')) // Filas de datos
  ].join('\n');

  // Crear un Blob con BOM para UTF-8
  const bom = '\uFEFF'; // Indicador de Byte Order Mark
  const blob = new Blob([bom + contenidoCSV], { type: 'text/csv;charset=utf-8;' });

  // Crear un enlace temporal para descargar el archivo
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Listado_Vehiculos.csv';
  a.click();

  // Liberar recursos
  window.URL.revokeObjectURL(url);
}



}