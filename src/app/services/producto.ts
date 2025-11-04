import { Injectable } from '@angular/core';
import { Producto } from '../models/producto'; // Importamos nuestro modelo
import { of, Observable } from 'rxjs'; // 'of' nos permite simular un Observable

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // Datos simulados (Mock Data)
  private productosMock: Producto[] = [
    {
      id: 1,
      nombre: 'Cerveza Tostada',
      descripcion: 'Cerveza artesanal de la casa.',
      precio: 4.50,
      categoria: 'Copa'
    },
    {
      id: 2,
      nombre: 'Patatas Bravas',
      descripcion: 'Las clásicas, con nuestra salsa secreta.',
      precio: 6.00,
      categoria: 'Cerveza'
    },
    {
      id: 3,
      nombre: 'Hamburguesa de la Casa',
      descripcion: '200g de ternera, queso cheddar y bacon.',
      precio: 12.50,
      categoria: 'Cachimba'
    },
    {
      id: 4,
      nombre: 'Juego de Mesa',
      descripcion: 'Un divertido juego de mesa para toda la familia.',
      precio: 29.99,
      categoria: 'Juego'
    }
  ];

  constructor() { }
  getProductos(): Observable<Producto[]> {
    return of(this.productosMock);
  }
}