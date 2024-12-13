import { Component, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ChoferService } from '../../../services/chofer.service';
import { Chofer } from '../../../models/chofer';
import { HeaderComponent } from '../../../componentes/header/header.component';

@Component({
  selector: 'app-listados-choferes',
  standalone: false,
  // imports: [],
  templateUrl: './listados-choferes.component.html',
  styleUrl: './listados-choferes.component.css'
})
export class ListadosChoferesComponent implements OnInit {
  searchText: string = '';
  choferes: Chofer[] = [];
  @Output() choferSeleccionado = new EventEmitter<Chofer>();
  @ViewChild('choferList', { static: true }) choferList: ElementRef | null = null;

  choferDetallado: ElementRef | null = null;
  constructor(private choferService: ChoferService) {}

  ngOnInit(): void {
    this.cargarChoferes();
  }

  cargarChoferes() {
    this.choferService.obtenerChoferes().subscribe((choferes) => {
      this.choferes = choferes.map((choferData: any) => {
        return new Chofer(
          choferData.nombre,
          choferData.dni,
          choferData.edad,
          choferData.nrolicencia,
          choferData.licencia,
          choferData.paisOrigen,         
        );
      });
    });
  }

 
  seleccionarChofer(chofer: Chofer) {
    this.choferSeleccionado.emit(chofer);
    this.scrollToChofer(chofer);
  }

  scrollToChofer(chofer: Chofer) {
    if (this.choferList) {
      const choferElement = this.choferList.nativeElement.querySelector(`li[class*="${chofer.dni}"]`);
      if (choferElement) {
        const isElementOutOfView = !choferElement.scrollIntoView({ behavior: 'smooth', block: 'start' });  
        if (isElementOutOfView) {
      
          const choferRect = choferElement.getBoundingClientRect();
          const parentScrollTop = this.choferList.nativeElement.scrollTop;
          window.scrollTo({
            top: choferRect.top + parentScrollTop,
            behavior: 'smooth'
          });
        }
      }
    }
  }



  
  getBanderaUrl(pais: string): string {
    const paises: { [key: string]: string } = {
      'Afganistán': 'af',
      'Albania': 'al',
      'Argelia': 'dz',
      'Andorra': 'ad',
      'Angola': 'ao',
      'Antigua y Barbuda': 'ag',
      'Argentina': 'ar',
      'Armenia': 'am',
      'Australia': 'au',
      'Austria': 'at',
      'Azerbaiyán': 'az',
      'Bahamas': 'bs',
      'Baréin': 'bh',
      'Bangladés': 'bd',
      'Barbados': 'bb',
      'Bielorrusia': 'by',
      'Bélgica': 'be',
      'Belice': 'bz',
      'Benín': 'bj',
      'Bután': 'bt',
      'Bolivia': 'bo',
      'Bosnia y Herzegovina': 'ba',
      'Botsuana': 'bw',
      'Brasil': 'br',
      'Brunéi': 'bn',
      'Bulgaria': 'bg',
      'Burkina Faso': 'bf',
      'Burundi': 'bi',
      'Cabo Verde': 'cv',
      'Camboya': 'kh',
      'Camerún': 'cm',
      'Canadá': 'ca',
      'República Centroafricana': 'cf',
      'Chad': 'td',
      'Chile': 'cl',
      'China': 'cn',
      'Colombia': 'co',
      'Comoras': 'km',
      'República Democrática del Congo': 'cd',
      'República del Congo': 'cg',
      'Costa Rica': 'cr',
      'Croacia': 'hr',
      'Cuba': 'cu',
      'Chipre': 'cy',
      'República Checa': 'cz',
      'Dinamarca': 'dk',
      'Yibuti': 'dj',
      'Dominica': 'dm',
      'República Dominicana': 'do',
      'Ecuador': 'ec',
      'Egipto': 'eg',
      'El Salvador': 'sv',
      'Guinea Ecuatorial': 'gq',
      'Eritrea': 'er',
      'Estonia': 'ee',
      'Esuatini': 'sz',
      'Etiopía': 'et',
      'Fiyi': 'fj',
      'Finlandia': 'fi',
      'Francia': 'fr',
      'Gabón': 'ga',
      'Gambia': 'gm',
      'Georgia': 'ge',
      'Alemania': 'de',
      'Ghana': 'gh',
      'Grecia': 'gr',
      'Granada': 'gd',
      'Guatemala': 'gt',
      'Guinea': 'gn',
      'Guinea-Bisáu': 'gw',
      'Guyana': 'gy',
      'Haití': 'ht',
      'Honduras': 'hn',
      'Hungría': 'hu',
      'Islandia': 'is',
      'India': 'in',
      'Indonesia': 'id',
      'Irán': 'ir',
      'Irak': 'iq',
      'Irlanda': 'ie',
      'Israel': 'il',
      'Italia': 'it',
      'Jamaica': 'jm',
      'Japón': 'jp',
      'Jordania': 'jo',
      'Kazajistán': 'kz',
      'Kenia': 'ke',
      'Kiribati': 'ki',
      'Kuwait': 'kw',
      'Kirguistán': 'kg',
      'Laos': 'la',
      'Letonia': 'lv',
      'Líbano': 'lb',
      'Lesoto': 'ls',
      'Liberia': 'lr',
      'Libia': 'ly',
      'Liechtenstein': 'li',
      'Lituania': 'lt',
      'Luxemburgo': 'lu',
      'Madagascar': 'mg',
      'Malawi': 'mw',
      'Malasia': 'my',
      'Maldivas': 'mv',
      'Malí': 'ml',
      'Malta': 'mt',
      'Islas Marshall': 'mh',
      'Mauritania': 'mr',
      'Mauricio': 'mu',
      'México': 'mx',
      'Micronesia': 'fm',
      'Moldavia': 'md',
      'Mónaco': 'mc',
      'Mongolia': 'mn',
      'Montenegro': 'me',
      'Marruecos': 'ma',
      'Mozambique': 'mz',
      'Birmania': 'mm',
      'Namibia': 'na',
      'Nauru': 'nr',
      'Nepal': 'np',
      'Países Bajos': 'nl',
      'Nueva Zelanda': 'nz',
      'Nicaragua': 'ni',
      'Níger': 'ne',
      'Nigeria': 'ng',
      'Corea del Norte': 'kp',
      'Macedonia del Norte': 'mk',
      'Noruega': 'no',
      'Omán': 'om',
      'Pakistán': 'pk',
      'Palaos': 'pw',
      'Palestina': 'ps',
      'Panamá': 'pa',
      'Papúa Nueva Guinea': 'pg',
      'Paraguay': 'py',
      'Perú': 'pe',
      'Filipinas': 'ph',
      'Polonia': 'pl',
      'Portugal': 'pt',
      'Catar': 'qa',
      'Rumanía': 'ro',
      'Rusia': 'ru',
      'Ruanda': 'rw',
      'San Cristóbal y Nieves': 'kn',
      'Santa Lucía': 'lc',
      'San Vicente y las Granadinas': 'vc',
      'Samoa': 'ws',
      'San Marino': 'sm',
      'Santo Tomé y Príncipe': 'st',
      'Arabia Saudita': 'sa',
      'Senegal': 'sn',
      'Serbia': 'rs',
      'Seychelles': 'sc',
      'Sierra Leona': 'sl',
      'Singapur': 'sg',
      'Eslovaquia': 'sk',
      'Eslovenia': 'si',
      'Islas Salomón': 'sb',
      'Somalia': 'so',
      'Sudáfrica': 'za',
      'Corea del Sur': 'kr',
      'Sudán del Sur': 'ss',
      'España': 'es',
      'Sri Lanka': 'lk',
      'Sudán': 'sd',
      'Surinam': 'sr',
      'Suecia': 'se',
      'Suiza': 'ch',
      'Siria': 'sy',
      'Taiwán': 'tw',
      'Tayikistán': 'tj',
      'Tanzania': 'tz',
      'Tailandia': 'th',
      'Togo': 'tg',
      'Tonga': 'to',
      'Trinidad y Tobago': 'tt',
      'Túnez': 'tn',
      'Turquía': 'tr',
      'Turkmenistán': 'tm',
      'Tuvalu': 'tv',
      'Uganda': 'ug',
      'Ucrania': 'ua',
      'Emiratos Árabes Unidos': 'ae',
      'Reino Unido': 'gb',
      'Estados Unidos': 'us',
      'Uruguay': 'uy',
      'Uzbekistán': 'uz',
      'Vanuatu': 'vu',
      'Ciudad del Vaticano': 'va',
      'Venezuela': 've',
      'Vietnam': 'vn',
      'Yemen': 'ye',
      'Zambia': 'zm',
      'Zimbabue': 'zw',
    };
  
    // Devuelve la URL de la bandera
    const codigoPais = paises[pais] || 'xx'; // 'xx' para manejar países no encontrados
    return `https://flagcdn.com/w40/${codigoPais}.png`;
  }
}
 
