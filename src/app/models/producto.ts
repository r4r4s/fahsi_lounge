export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: 'Copa' | 'Cerveza' | 'Cachimba' | 'Juego';
  subcategoria?: 'Whisky' | 'Gin' | 'Vodka' | 'Ron' | 'Licores';
  imagenUrl?: string;
}
