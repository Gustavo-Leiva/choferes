import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Chofer } from '../models/chofer';
import { Firestore, collection,  collectionData, addDoc, doc, setDoc } from '@angular/fire/firestore'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ChoferService {

  private choferesPath = 'choferes';

  // constructor(private firestore: AngularFirestore) {}

  constructor(private firestore: Firestore) {}

 // Método para agregar un chofer con Angular Firestore
//  agregarChofer(chofer: any): Promise<void> {
//   const id = this.firestore.createId(); // Genera un ID único
//   return this.firestore.collection('choferes').doc(id).set(chofer); // Guarda el chofer en la colección
// }


  // Método para agregar un chofer
  agregarChofer(chofer: any): Promise<void> {
    // Genera un ID único para el documento
    const choferRef = doc(collection(this.firestore, 'choferes')); // Obtiene la referencia del documento con ID único generado automáticamente
    
    // Guarda el chofer en la colección usando la referencia generada
    return setDoc(choferRef, chofer); // Usamos setDoc para guardar los datos
  }

  //metodo para obtener todo con Angular Firestore
  // obtenerChoferes(): Observable<Chofer[]> {
  //   return this.firestore.collection<Chofer>(this.choferesPath).valueChanges();
  // }
  obtenerChoferes(): Observable<Chofer[]> {
    const choferesRef = collection(this.firestore, this.choferesPath); // Nueva API modular
    return collectionData(choferesRef, { idField: 'id' }) as Observable<Chofer[]>; // Uso de collectionData
  }

  // obtenerVehiculos(): Observable<Vehiculo[]> {
  //   const vehiculosRef = collection(this.firestore, 'vehiculos');
  //   return collectionData(vehiculosRef, { idField: 'id' }) as Observable<Vehiculo[]>;
  // }

  //metodo para obtener si tiene stock
  // getChoferesConLicencia(): Observable<Chofer[]> {
  //   return this.firestore.collection<Chofer>(this.choferesPath, ref => ref.where('licencia', '==', "si"))
  //     .valueChanges();
  // }

  //metodo para obtener por dni
  // obtenerChoferPorDni(dni: string): Observable<Chofer | undefined> {
  //   return this.firestore.collection<Chofer>(this.choferesPath, ref => ref.where('dni', '==', dni))
  //     .valueChanges()
  //     .pipe(
  //       map(choferes => choferes.length > 0 ? choferes[0] : undefined)
  //     );
  // }
}
