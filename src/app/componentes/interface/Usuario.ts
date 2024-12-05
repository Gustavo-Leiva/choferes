
export interface Usuario {
    uid?: string; // UID opcional para usuarios creados automáticamente en Firebase
    // nombre: string;
    // apellido: string;
    email: string;
    // edad: number;
    // dni: number;
    password: string;
    tipoUsuario: string;  // Ahora opcional y específico en interfaces derivadas
    // fotoPerfil1?: File | string;  // Hacer opcional para flexibilidad
  }
  
  export interface Empleado extends Usuario {
    tipoUsuario: 'empleado';  // Especifica que es un paciente
    // obraSocial: string;       // Propiedad específica para Paciente
    // fotoPerfil2: File | string;
  }
  
//   export interface Especialista extends Usuario {
//     tipoUsuario: 'especialista';  // Especifica que es un especialista
//     especialidades: string[];  // Array de especialidades
//     // especialidades: { 
//     //   nombre: string; 
//     //   imagen: string; 
//     // }[]; // Array de especialidades con nombre e imagen
//     estado: 'pendiente' | 'aceptado' | 'rechazado'; // Estado específico para especialistas
//     diasAtencion?: Array<string>;
//     horariosAtencion?: Array<string>;
//   }
  
  export interface Administrador extends Usuario {
    tipoUsuario: 'administrador';  // Especifica que es un administrador
    // Puedes agregar otras propiedades específicas para Administrador aquí si es necesario
  }