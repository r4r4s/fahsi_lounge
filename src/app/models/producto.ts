export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: 'Copa' | 'Cerveza' | 'Cachimba' | 'Juego'; 
  imagenUrl?: string;
}
