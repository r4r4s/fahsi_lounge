import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productosMock: Producto[] = [
    
    { id: 1, nombre: 'San Miguel', descripcion: 'Tercio', precio: 3.00, categoria: 'Cerveza' },
    { id: 2, nombre: 'San Miguel', descripcion: 'Doble', precio: 2.50, categoria: 'Cerveza' },
    
    { id: 5, nombre: 'Ballantine’s', descripcion: 'Whisky escocés suave.', precio: 8.00, categoria: 'Copa', subcategoria: 'Whisky' },
    { id: 6, nombre: 'Johnnie Walker Red Label', descripcion: 'Whisky blended con final especiado.', precio: 8.50, categoria: 'Copa', subcategoria: 'Whisky' },
    { id: 7, nombre: 'Cutty Sark', descripcion: 'Whisky ligero ideal para combinar.', precio: 9.00, categoria: 'Copa', subcategoria: 'Whisky' },

    { id: 8, nombre: 'Beefeater', descripcion: 'Ginebra londinense clásica.', precio: 8.50, categoria: 'Copa', subcategoria: 'Gin' },
    { id: 9, nombre: 'Bombay Sapphire', descripcion: 'Ginebra equilibrada y aromática.', precio: 9.00, categoria: 'Copa', subcategoria: 'Gin' },
    { id: 10, nombre: 'Hendrick’s', descripcion: 'Ginebra infusionada con pepino y rosa.', precio: 9.50, categoria: 'Copa', subcategoria: 'Gin' },

    { id: 11, nombre: 'Absolut', descripcion: 'Vodka sueco puro y versátil.', precio: 8.50, categoria: 'Copa', subcategoria: 'Vodka' },
    { id: 12, nombre: 'Grey Goose', descripcion: 'Vodka francés premium.', precio: 10.00, categoria: 'Copa', subcategoria: 'Vodka' },

    { id: 13, nombre: 'Brugal Añejo', descripcion: 'Ron dominicano con notas tostadas.', precio: 8.50, categoria: 'Copa', subcategoria: 'Ron' },
    { id: 14, nombre: 'Bacardí Carta Blanca', descripcion: 'Ron suave ideal para cócteles.', precio: 8.00, categoria: 'Copa', subcategoria: 'Ron' },
    { id: 15, nombre: 'Mojito Clásico', descripcion: 'Ron, hierbabuena y lima fresca.', precio: 9.50, categoria: 'Copa', subcategoria: 'Ron' },

    { id: 16, nombre: 'Baileys', descripcion: 'Licor cremoso de whisky irlandés.', precio: 7.50, categoria: 'Copa', subcategoria: 'Licores' },
    { id: 17, nombre: 'Licor 43', descripcion: 'Dulce y cítrico, ideal para combinados.', precio: 7.50, categoria: 'Copa', subcategoria: 'Licores' },
    { id: 18, nombre: 'Amaretto Disaronno', descripcion: 'Licor italiano de almendra.', precio: 7.50, categoria: 'Copa', subcategoria: 'Licores' },

    { id: 26, nombre: 'Tequila Sunrise Shot', descripcion: 'Tequila, naranja y granadina.', precio: 4.00, categoria: 'Copa', subcategoria: 'Chupitos' },
    { id: 27, nombre: 'Kamikaze', descripcion: 'Vodka, triple sec y lima.', precio: 4.00, categoria: 'Copa', subcategoria: 'Chupitos' },
    { id: 28, nombre: 'B-52', descripcion: 'Capas de licor de café, Baileys y Grand Marnier.', precio: 4.50, categoria: 'Copa', subcategoria: 'Chupitos' },


    { id: 19, nombre: 'Mi amor', descripcion: 'Dulce, afrutado y suave', precio: 18.00, categoria: 'Cachimba' },
    { id: 20, nombre: 'Menta', descripcion: 'Menta fresca', precio: 18.00, categoria: 'Cachimba' },
    { id: 21, nombre: 'Doble manzana', descripcion: 'Anís y manzana intensa', precio: 18.00, categoria: 'Cachimba' },
    { id: 22, nombre: 'Regaliz', descripcion: 'Intenso, dulce y especiado', precio: 18.00, categoria: 'Cachimba' },


    { id: 23, nombre: 'Billar', descripcion: '', precio: 2.00, categoria: 'Juego' },
    { id: 24, nombre: 'Diana', descripcion: '*1€ por persona', precio: 2.00, categoria: 'Juego' },
    { id: 25, nombre: 'Futbolín', descripcion: '', precio: 1.00, categoria: 'Juego' },
    
  ];



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
