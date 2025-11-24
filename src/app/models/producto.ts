export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: 'Copa' | 'Cerveza' | 'Cachimba' | 'Juego' | 'Cena';
  subcategoria?:
    | 'Whisky'
    | 'Gin'
    | 'Vodka'
    | 'Ron'
    | 'Licores'
    | 'Chupitos'
    | 'Hamburguesas'
    | 'Complementos';
  imagenUrl?: string;
}
