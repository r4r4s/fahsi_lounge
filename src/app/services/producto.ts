import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  
  private productosMock: Producto[] = [
    
    { id: 1, nombre: 'Cerveza Tostada', descripcion: 'Artesanal.', precio: 4.50, categoria: 'Cerveza' },
    { id: 2, nombre: 'Cerveza Rubia', descripcion: 'Suave.', precio: 3.50, categoria: 'Cerveza' },
    { id: 3, nombre: 'Cerveza Negra', descripcion: 'Intensa.', precio: 5.00, categoria: 'Cerveza' },
    

    
    
    { id: 5, nombre: 'Gin Tonic (Beefeater)', descripcion: 'Clásico.', precio: 8.00, categoria: 'Copa' },
    { id: 6, nombre: 'Ron Cola (Barceló)', descripcion: 'El de siempre.', precio: 8.00, categoria: 'Copa' },
    { id: 7, nombre: 'Whisky (Jameson)', descripcion: 'Solo o con hielo.', precio: 9.00, categoria: 'Copa' },
    { id: 8, nombre: 'Mojito', descripcion: 'Fresco y mentolado.', precio: 10.00, categoria: 'Copa' },
    { id: 4, nombre: 'Copa de Vino', descripcion: 'Tinto o blanco.', precio: 6.00, categoria: 'Copa' },
    { id: 5, nombre: 'Copa de Champagne', descripcion: 'Burbujeante.', precio: 12.00, categoria: 'Copa' },

    
    { id: 9, nombre: 'Cachimba Frutal', descripcion: 'Sabor a frutas mixtas.', precio: 15.00, categoria: 'Cachimba' },
    { id: 10, nombre: 'Cachimba Menta', descripcion: 'Refrescante sabor a menta.', precio: 15.00, categoria: 'Cachimba' },
    { id: 11, nombre: 'Cachimba Vainilla', descripcion: 'Dulce sabor a vainilla.', precio: 15.00, categoria: 'Cachimba' },

    
    { id: 12, nombre: 'Cartas', descripcion: 'Baraja española.', precio: 5.00, categoria: 'Juego' },
    { id: 13, nombre: 'Dominó', descripcion: 'Juego clásico de fichas.', precio: 7.00 , categoria: 'Juego' },
    { id: 14, nombre: 'Ajedrez', descripcion: 'Juego de estrategia.', precio: 10.00, categoria: 'Juego' },
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