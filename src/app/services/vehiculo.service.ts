import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, collection, collectionData, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Vehiculo } from '../models/vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  constructor(private firestore: Firestore) {}

  // Método para agregar un vehículo a Firestore con el ID asignado previamente
  async agregarVehiculo(vehiculo: Vehiculo): Promise<void> {
    const vehiculosRef = collection(this.firestore, 'vehiculos');
    const newDocRef = doc(vehiculosRef);  // Generamos una referencia de documento con ID único
    const id = newDocRef.id;  // Obtenemos el ID generado

    try {
      // Guardamos el vehículo con el ID ya incluido
      await setDoc(newDocRef, { ...vehiculo, id });
      console.log('Vehículo agregado exitosamente con ID:', id);
    } catch (error) {
      console.error('Error al agregar vehículo:', error);
    }
  }

   // Método para obtener los vehículos desde Firestore, incluyendo el ID
   obtenerVehiculos(): Observable<Vehiculo[]> {
    const vehiculosRef = collection(this.firestore, 'vehiculos');
    return collectionData(vehiculosRef, { idField: 'id' }) as Observable<Vehiculo[]>;
  }

  // Método para modificar un vehículo en Firestore
  async modificarVehiculo(id: string, datosActualizados: Partial<Vehiculo>): Promise<void> {
    const vehiculoDocRef = doc(this.firestore, `vehiculos/${id}`);
    
    try {
      await updateDoc(vehiculoDocRef, datosActualizados);
      console.log('Vehículo modificado exitosamente');
    } catch (error) {
      console.error('Error al modificar el vehículo:', error);
    }
  }

    // Método para eliminar un vehículo en Firestore
    async eliminarVehiculo(id: string): Promise<void> {
      const vehiculoDocRef = doc(this.firestore, `vehiculos/${id}`);
      
      try {
        await deleteDoc(vehiculoDocRef);
        console.log('Vehículo eliminado exitosamente');
         
      } catch (error) {
        console.error('Error al eliminar el vehículo:', error);
      }
    }

}

