import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  
  private productosMock: Producto[] = [
    
    { id: 1, nombre: 'San Miguel', descripcion: 'Tercio', precio: 3.00, categoria: 'Cerveza' },
    { id: 2, nombre: 'San Miguel', descripcion: 'Doble', precio: 2.50, categoria: 'Cerveza' },
    
    { id: 5, nombre: 'Gin Tonic (Beefeater)', descripcion: 'Clásico.', precio: 8.00, categoria: 'Copa' },
    { id: 6, nombre: 'Ron Cola (Barceló)', descripcion: 'El de siempre.', precio: 8.00, categoria: 'Copa' },
    { id: 7, nombre: 'Whisky (Jameson)', descripcion: 'Solo o con hielo.', precio: 9.00, categoria: 'Copa' },
    { id: 8, nombre: 'Mojito', descripcion: 'Fresco y mentolado.', precio: 10.00, categoria: 'Copa' },
    { id: 4, nombre: 'Copa de Vino', descripcion: 'Tinto o blanco.', precio: 6.00, categoria: 'Copa' },
    { id: 5, nombre: 'Copa de Champagne', descripcion: 'Burbujeante.', precio: 12.00, categoria: 'Copa' },

    
    { id: 9, nombre: 'Mi amor', descripcion: 'Dulce, afrutado y suave', precio: 18.00, categoria: 'Cachimba' },
    { id: 10, nombre: 'Menta', descripcion: 'Menta fresca', precio: 18.00, categoria: 'Cachimba' },
    { id: 11, nombre: 'Doble manzana', descripcion: 'Anís y manzana intensa', precio: 18.00, categoria: 'Cachimba' },
    { id: 12, nombre: 'Regaliz', descripcion: 'Intenso, dulce y especiado', precio: 18.00, categoria: 'Cachimba' },

    
    { id: 13, nombre: 'Billar', descripcion: '', precio: 2.00, categoria: 'Juego' },
    { id: 14, nombre: 'Diana', descripcion: '*1€ por persona', precio: 2.00, categoria: 'Juego' },
    { id: 15, nombre: 'Futbolín', descripcion: '', precio: 1.00, categoria: 'Juego' },
    
  ];

  constructor() { }


  getProductos(): Observable<Producto[]> {
    return of(this.productosMock);
  }


  getProductosPorCategoria(categoria: string): Observable<Producto[]> {
    return this.getProductos().pipe(
      map(productos => 
        productos.filter(p => p.categoria === categoria)
      )
    );
  }
}