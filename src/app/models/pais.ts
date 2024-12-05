export class Pais {
    nombre: string;
    banderaUrl: string;
    codigo: string;
    continente: string;
  
    constructor(nombre: string, codigo: string, banderaUrl: string, continente: string) {
      this.nombre = nombre;
      this.codigo = codigo;
      this.banderaUrl = banderaUrl;
      this.continente = continente;
    }
  }