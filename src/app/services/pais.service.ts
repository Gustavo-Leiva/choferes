import { Injectable } from '@angular/core';
import { Pais } from '../models/pais';
import { Observable, map, of, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private ruta: string = 'https://restcountries.com/v3.1/all';
  private paises: Pais[] = [];
  
  constructor(private http: HttpClient) {}

  // Método para transformar un país a un modelo País
// private transformarPais(pais: any): Pais {
//   return {
//     nombre: this.obtenerNombreEnEspañol(pais),
//     banderaUrl: pais.flags?.png || '',
//     codigo: pais.cca2,
//     continente: pais.region || 'Desconocido',
//   };
// }

private transformarPais(pais: any): Pais {
  return {
    nombre: this.obtenerNombreEnEspañol(pais),
    banderaUrl: pais.flags?.png || '',
    codigo: pais.cca2,
    continente: this.traducirContinente(pais.region || 'Desconocido'),
  };
}

  // Método para obtener todos los países
// traerPaises(): Observable<Pais[]> {
//   return this.http.get<any[]>(this.ruta).pipe(
//     map(response => response.map(pais => this.transformarPais(pais))),
//     catchError(err => {
//       console.error('Error al obtener países:', err);
//       return of([]); // Retorna un arreglo vacío en caso de error
//     })
//   );
// }

traerPaises(): Observable<Pais[]> {
  return this.http.get<any[]>(this.ruta).pipe(
    map(response => 
      response.map(pais => this.transformarPais(pais)) // Transforma los datos
              .sort((a, b) => a.nombre.localeCompare(b.nombre)) // Ordena alfabéticamente por nombre
    ),
    catchError(err => {
      console.error('Error al obtener países:', err);
      return of([]); // Retorna un arreglo vacío en caso de error
    })
  );
}


  // Método para obtener un país por código
  getPaisOrigen(codigo: string): Pais | null {
    return this.paises.find(pais => pais.codigo === codigo) || null;
  }
  
  // Método para obtener el nombre en español
  private obtenerNombreEnEspañol(pais: any): string {
    // Intenta obtener el nombre en español
    const nombreEnEspañol = pais.name?.translations?.spa?.common || pais.name?.common || 'Desconocido';
    
    // Si no se pudo obtener el nombre en español, intenta traducir usando el diccionario
    return this.traducirNombrePais(nombreEnEspañol);
  }

  // Método para obtener países por continente
  obtenerPaisesPorContinente(continente: string): Observable<Pais[]> {
    return this.traerPaises().pipe(
      map(paises => {
        return paises.filter(pais => pais.continente === continente);
      }),
      catchError(err => {
        console.error('Error al obtener países por continente:', err);
        return of([]); // Retorna un arreglo vacío en caso de error
      })
    );
  }

  // Método para obtener los países en español
  obtenerPaisesEnEspañol(): Observable<string[]> {
    return this.traerPaises().pipe( // Utiliza la función existente
      map(paises => 
        paises.map(pais => pais.nombre) // Devuelve el nombre en español
      )
    );
  }

  // Método para traducir nombres de países no traducidos
  private traducirNombrePais(nombre: string): string {
    return this.traducciones[nombre] || nombre; // Devuelve la traducción o el nombre original
  }


  private traducirContinente(continente: string): string {
    return this.traduccionesContinentes[continente] || 'Desconocido';
  }
  

  private traduccionesContinentes: { [key: string]: string } = {
    'Europe': 'Europa',
    'Asia': 'Asia',
    'Africa': 'África',
    'Oceania': 'Oceanía',
    'Americas': 'Américas',
    'Antarctic': 'Antártida',
  };


  
  
  // Objeto que contiene las traducciones de los nombres de países
  private traducciones: { [key: string]: string } = {
    'Afghanistan': 'Afganistán',
    'Albania': 'Albania',
    'Algeria': 'Argelia',
    'Andorra': 'Andorra',
    'Angola': 'Angola',
    'Antigua and Barbuda': 'Antigua y Barbuda',
    'Argentina': 'Argentina',
    'Armenia': 'Armenia',
    'Australia': 'Australia',
    'Austria': 'Austria',
    'Azerbaijan': 'Azerbaiyán',
    'Antarctic' :'Antartida',
    'Antarctica':'Antartida',
    'Bahamas': 'Bahamas',
    'Bahrain': 'Baréin',
    'Bangladesh': 'Bangladés',
    'Barbados': 'Barbados',
    'Belarus': 'Bielorrusia',
    'Belgium': 'Bélgica',
    'Belize': 'Belice',
    'Benin': 'Benín',
    'Bhutan': 'Bután',
    'Bolivia': 'Bolivia',
    'Bosnia and Herzegovina': 'Bosnia y Herzegovina',
    'Botswana': 'Botsuana',
    'Brazil': 'Brasil',
    'Brunei': 'Brunéi',
    'Bulgaria': 'Bulgaria',
    'Burkina Faso': 'Burkina Faso',
    'Burundi': 'Burundi',
    'British Indian Ocean Territory':'Territorio Britanico del Oceano Indico',
    'Caribbean Netherlands' : 'Caribe Holandes',
    'Cayman Islands':'Isla Caiman',
    'Cabo Verde': 'Cabo Verde',
    'Cambodia': 'Camboya',
    'Cameroon': 'Camerún',
    'Canada': 'Canadá',
    'Cape Verde':'Cabo Verde',
    'Central African Republic': 'República Centroafricana',
    'Chad': 'Chad',
    'Chile': 'Chile',
    'China': 'China',
    'Czechia':'Republica Checa',
    'Colombia': 'Colombia',
    'Comoros': 'Comoras',
    'Congo, Democratic Republic of the': 'República Democrática del Congo',
    'Congo, Republic of the': 'República del Congo',
    'Costa Rica': 'Costa Rica',
    'Cook Islands':'Isla de Cook',
    'Croatia': 'Croacia',
    'Christmas Island':'Isla de Navidad',
    'Cuba': 'Cuba',
    'Cyprus': 'Chipre',
    'Czech Republic': 'República Checa',
    'Denmark': 'Dinamarca',
    'Djibouti': 'Yibuti',
    'Dominica': 'Dominica',
    'DR Congo':'Republica Democratica del congo',
    'Dominican Republic': 'República Dominicana',
    'Ecuador': 'Ecuador',
    'Egypt': 'Egipto',
    'El Salvador': 'El Salvador',
    'Equatorial Guinea': 'Guinea Ecuatorial',
    'Eritrea': 'Eritrea',
    'Estonia': 'Estonia',
    'Eswatini': 'Esuatini',
    'Ethiopia': 'Etiopía',
    'Fiji': 'Fiyi',
    'Finland': 'Finlandia',
    'French Polynesia':'Polinesia Francesa',
    'France': 'Francia',
    'Faroe Islands' :'Islas de Faroe',
    'Falkland Islands':'Isla Falkland',
    'French Guiana':'Guayana Francesa',
    'French Southern and Antarctic Lands':'Tierras Australes y Antárticas Francesas',
    'Gabon': 'Gabón',
    'Gambia': 'Gambia',
    'Georgia': 'Georgia',
    'Germany': 'Alemania',
    'Ghana': 'Ghana',
    'Greece': 'Grecia',
    'Grenada': 'Granada',
    'Greenland':'Groenlandia',
    'Guatemala': 'Guatemala',
    'Guinea': 'Guinea',
    'Guernsey':'Isla Guernsey',
    'Guinea-Bissau': 'Guinea-Bisáu',
    'Guyana': 'Guyana',
    'Haiti': 'Haití',
    'Honduras': 'Honduras',
    'Heard Island and McDonald Islands':'Islas Heard y McDonald',
    'Hungary': 'Hungría',
    'Iceland': 'Islandia',
    'Isle of Man' :'Isla de Man',
    'Åland Islands':'Isla Aland',
    'India': 'India',
    'Indonesia': 'Indonesia',
    'Iran': 'Irán',
    'Iraq': 'Irak',
    'Ireland': 'Irlanda',
    'Israel': 'Israel',
    'Italy': 'Italia',
    'Svalbard and Jan Mayen':'Isla Svalbard y Jan Mayen',
    'Ivory Coast':'Costa de Marfil',
    'Jamaica': 'Jamaica',
    'Japan': 'Japón',
    'Jordan': 'Jordania',
    'Kazakhstan': 'Kazajistán',
    'Kenya': 'Kenia',
    'Kiribati': 'Kiribati',
    'Kuwait': 'Kuwait',
    'Kyrgyzstan': 'Kirguistán',
    'Laos': 'Laos',
    'Latvia': 'Letonia',
    'Lebanon': 'Líbano',
    'Lesotho': 'Lesoto',
    'Liberia': 'Liberia',
    'Libya': 'Libia',
    'Liechtenstein': 'Liechtenstein',
    'Lithuania': 'Lituania',
    'Luxembourg': 'Luxemburgo',
    'Madagascar': 'Madagascar',
    'Malawi': 'Malawi',
    'Malaysia': 'Malasia',
    'Maldives': 'Maldivas',
    'Mali': 'Malí',
    'Malta': 'Malta',
    'Marshall Islands': 'Islas Marshall',
    'Mauritania': 'Mauritania',
    'Mauritius': 'Mauricio',
    'Mexico': 'México',
    'Micronesia': 'Micronesia',
    'Moldova': 'Moldavia',
    'Monaco': 'Mónaco',
    'Mongolia': 'Mongolia',
    'Montenegro': 'Montenegro',
    'Morocco': 'Marruecos',
    'Mozambique': 'Mozambique',
    'Myanmar': 'Birmania',
    'Namibia': 'Namibia',
    'Nauru': 'Nauru',
    'Nepal': 'Nepal',
    'Netherlands': 'Países Bajos',
    'New Zealand': 'Nueva Zelanda',
    'Nicaragua': 'Nicaragua',
    'Niger': 'Níger',
    'Nigeria': 'Nigeria',
    'North Korea': 'Corea del Norte',
    'North Macedonia': 'Macedonia del Norte',
    'Northern Mariana Islands':'Islas de Mariana del Norte',
    'Norfolk Island':'Isla de Norfolk',
    'Bouvet Island':'Isla de Bouvet',
    'Norway': 'Noruega',
    'Oman': 'Omán',
    'Pakistan': 'Pakistán',
    'Palau': 'Palaos',
    'Palestine': 'Palestina',
    'Panama': 'Panamá',
    'Papua New Guinea': 'Papúa Nueva Guinea',
    'Paraguay': 'Paraguay',
    'Peru': 'Perú',
    'Philippines': 'Filipinas',
    'Pitcairn Islands':'Las Islas Pitcairn',
    'Poland': 'Polonia',
    'Portugal': 'Portugal',
    'Qatar': 'Catar',
    'Romania': 'Rumanía',
    'Republic of the Congo':'Republica de Congo',
    'Russia': 'Rusia',
    'Rwanda': 'Ruanda',
    'Saint Kitts and Nevis': 'San Cristóbal y Nieves',
    'Sint Maarten':'Isla de San Martin(Frances)',
    'Saint Martin':'Isla de San Martin (Holandes)',
    'Saint Pierre and Miquelon':'San Pedro y Miquelon',
    'Saint Vincent and the Grenadines': 'San Vicente y las Granadinas',
    'Samoa': 'Samoa',
    'San Marino': 'San Marino',
    'Saint Barthélemy' :'San Bartolome',
    'São Tomé and Príncipe': 'Santo Tomé y Príncipe',
    'Saint Helena, Ascension and Tristan da Cunha':' Islas de Santa Elena, Ascensión y Tristán de Acuña',
    'Saudi Arabia': 'Arabia Saudita',
    'Senegal': 'Senegal',
    'Serbia': 'Serbia',
    'Seychelles': 'Seychelles',
    'Sierra Leone': 'Sierra Leona',
    'Singapore': 'Singapur',
    'Slovakia': 'Eslovaquia',
    'Slovenia': 'Eslovenia',
    'Solomon Islands': 'Islas Salomón',
    'Somalia': 'Somalia',
    'South Africa': 'Sudáfrica',
    'South Georgia':'Georgia del Sur',
    'South Korea': 'Corea del Sur',
    'South Sudan': 'Sudán del Sur',
    'Spain': 'España',
    'Sri Lanka': 'Sri Lanka',
    'Sudan': 'Sudán',
    'Suriname': 'Surinam',
    'Sweden': 'Suecia',
    'Switzerland': 'Suiza',
    'Syria': 'Siria',
    'Taiwan': 'Taiwán',
    'Tajikistan': 'Tayikistán',
    'Turks and Caicos Islands':'Islas Turcas y Caicos',
    'Tanzania': 'Tanzania',
    'Thailand': 'Tailandia',
    'Togo': 'Togo',
    'Tonga': 'Tonga',
    'Trinidad and Tobago': 'Trinidad y Tobago',
    'Tunisia': 'Túnez',
    'Turkey': 'Turquía',
    'Turkmenistan': 'Turkmenistán',
    'Tuvalu': 'Tuvalu',
    'Uganda': 'Uganda',
    'Ukraine': 'Ucrania',
    'United Arab Emirates': 'Emiratos Árabes Unidos',
    'United Kingdom': 'Reino Unido',
    'United States': 'Estados Unidos',
    'United States Virgin Islands':'Islas Virgenes de los Estados Unidos',
    'United States Minor Outlying Islands':'Islas Ultramarinas Menores de los Estados Unidos',
    'Uruguay': 'Uruguay',
    'Uzbekistan': 'Uzbekistán',
    'Vanuatu': 'Vanuatu',
    'Vatican City': 'Ciudad del Vaticano',
    'Venezuela': 'Venezuela',
    'Vietnam': 'Vietnam',
    'Yemen': 'Yemen',
    'Wallis and Futuna':'Wallis y Futuna',
    'Zambia': 'Zambia',
    'Zimbabwe': 'Zimbabue'

  };
}


