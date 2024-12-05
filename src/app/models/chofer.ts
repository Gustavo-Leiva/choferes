export class Chofer {
    constructor(
      public nombre: string,
      public dni: number,
      public edad: number,
      public nrolicencia: number,
      public licencia: boolean,
      public paisOrigen: string,
      // public urlBandera: "https://restcountries.com/v3.1/data/flags/arg.png" //
    ) {}
  }