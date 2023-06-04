export interface iAlumno {
  id?: number;
  nombre: string;
  apellido: string;
  legajo: string;
  dni: string;
  email: string;
  telefono: string;
  password: string;
  estado: boolean;
  f_nac: Date;
  curso: number;
  carreraId: number;
  avatar:string;
}
