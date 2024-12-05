export class Vehiculo {
    constructor(
      public nombre: string,
      public tipo: 'terrestre' | 'aereo' | 'maritimo',
      public cantidadRuedas: number,
      public capacidad: number,
      public id: string, // Cambiar a string
      
    ) {}
  }