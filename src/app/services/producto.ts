import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productosMock: Producto[] = [
    { id: 1, nombre: 'San Miguel', descripcion: 'Tercio', precio: 3.0, categoria: 'Cerveza' },
    { id: 2, nombre: 'San Miguel', descripcion: 'Doble', precio: 2.5, categoria: 'Cerveza' },

    {
      id: 5,
      nombre: 'Ballantine’s',
      descripcion: 'Whisky escocés suave.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Whisky',
    },
    {
      id: 6,
      nombre: 'Johnnie Walker Red Label',
      descripcion: 'Whisky blended con final especiado.',
      precio: 8.5,
      categoria: 'Copa',
      subcategoria: 'Whisky',
    },
    {
      id: 7,
      nombre: 'Cutty Sark',
      descripcion: 'Whisky ligero ideal para combinar.',
      precio: 9.0,
      categoria: 'Copa',
      subcategoria: 'Whisky',
    },

    {
      id: 8,
      nombre: 'Beefeater',
      descripcion: 'Ginebra londinense con notas cítricas y toques de enebro clásico.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Gin',
    },
    {
      id: 9,
      nombre: "Seagram's",
      descripcion: 'Ginebra americana suave, con equilibrio entre enebro y especias.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Gin',
    },
    {
      id: 10,
      nombre: 'Larios',
      descripcion:'Ginebra mediterránea con notas frescas de enebro, cítricos y un toque floral, ligera y refrescante.',
      precio: 8.00,
      categoria: 'Copa',
      subcategoria: 'Gin',
    },
    {
      id: 10,
      nombre: 'Martin Miller',
      descripcion:'Ginebra premium destilada con botánicos frescos y un sutil toque de pepino y rosa.',
      precio: 12.0,
      categoria: 'Copa',
      subcategoria: 'Gin',
    },
    {
      id: 11,
      nombre: 'Ginebra Rosa',
      descripcion: 'Ginebra afrutada con notas de fresa y frambuesa, de sabor dulce y refrescante.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Gin',
    },
    {
      id: 12,
      nombre: 'Martini',
      descripcion: 'Vermut italiano aromático con matices herbales y un toque de dulzor.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Gin',
    },

    {
      id: 12,
      nombre: 'Absolut Vodka',
      descripcion: 'Vodka sueco puro y suave.',
      precio: 8.00,
      categoria: 'Copa',
      subcategoria: 'Vodka',
    },
    {
      id: 13,
      nombre: 'Vodka Smirnoff',
      descripcion: 'Vodka ruso con notas suaves y limpias.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Vodka',
    },
    {
      id: 14,
      nombre: 'Moskovskaya Vodka',
      descripcion: 'Vodka ruso con notas suaves y limpias.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Vodka',
    },
    {
      id: 15,
      nombre: 'Barcelo',
      descripcion: 'Ron dominicano suave y aromático.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Ron',
    },

    {
      id: 16,
      nombre: 'Santa Teresa 1796',
      descripcion: 'Ron premium venezolano con notas de caramelo y especias.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Ron',
    },
    {
      id: 17,
      nombre: 'Brugal Añejo',
      descripcion: 'Ron dominicano con sabor suave y toques de vainilla.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Ron',
    },
    {
      id: 18,
      nombre: 'Negrita',
      descripcion: 'Ron dominicano con sabor suave y toques de vainilla.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Ron',
    },
    {
      id: 18,
      nombre: 'Bacardi',
      descripcion: 'Ron puertorriqueño ligero y versátil.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Ron',
    },
    {
      id: 19,
      nombre: 'Cacique',
      descripcion: 'Ron venezolano con notas de caramelo y especias.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Ron',
    },
    {
      id: 20,
      nombre: 'Jägermeister',
      descripcion: 'Licor alemán de hierbas con sabor intenso y dulce-amargo.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Licores',
    },
    {
      id: 20,
      nombre: 'Licor 43',
      descripcion: 'Dulce licor español con toques de vainilla y cítricos.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Licores',
    },
    {
      id: 21,
      nombre: 'Baileys',
      descripcion: 'Crema irlandesa suave y dulce con sabor a chocolate y café.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Licores',
    },
    {
      id: 22,
      nombre: 'Amaretto',
      descripcion: 'Licor italiano con sabor a almendra y toques dulces.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Licores',
    },
    {
      id: 23,
      nombre: 'Fernet-Branca',
      descripcion: 'Amargo licor italiano con hierbas y especias.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Licores',
    },
    {
      id: 23,
      nombre: 'Tia Maria',
      descripcion: 'Licor de café jamaicano con sabor dulce y rico.',
      precio: 8.0,
      categoria: 'Copa',
      subcategoria: 'Licores',
    },
    



    {
      id: 20,
      nombre: 'Mi amor',
      descripcion: 'Dulce, afrutado y suave',
      precio: 18.0,
      categoria: 'Cachimba',
    },
    { id: 20, nombre: 'Menta', descripcion: 'Menta fresca', precio: 18.0, categoria: 'Cachimba' },
    {
      id: 21,
      nombre: 'Doble manzana',
      descripcion: 'Anís y manzana intensa',
      precio: 18.0,
      categoria: 'Cachimba',
    },
    {
      id: 22,
      nombre: 'Regaliz',
      descripcion: 'Intenso, dulce y especiado',
      precio: 18.0,
      categoria: 'Cachimba',
    },

    { id: 23, nombre: 'Billar', descripcion: '', precio: 2.0, categoria: 'Juego' },
    { id: 24, nombre: 'Diana', descripcion: '*1€ por persona', precio: 2.0, categoria: 'Juego' },
    { id: 25, nombre: 'Futbolín', descripcion: '', precio: 1.0, categoria: 'Juego' },
  ];

  constructor() {}

  getProductos(): Observable<Producto[]> {
    return of(this.productosMock);
  }

  getProductosPorCategoria(categoria: string): Observable<Producto[]> {
    return this.getProductos().pipe(
      map((productos) => productos.filter((p) => p.categoria === categoria))
    );
  }
}
