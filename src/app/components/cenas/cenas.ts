import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto';

@Component({
  selector: 'app-cenas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cenas.html',
  styleUrl: './cenas.css'
})
export class Cenas implements OnInit {
  private readonly subcategoriasCena = ['Hamburguesas', 'Complementos'] as const;

  public cenasPorSubcategoria$!: Observable<{ nombre: string; productos: Producto[] }[]>;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.cenasPorSubcategoria$ = this.productoService.getProductosPorCategoria('Cena').pipe(
      map(cenas =>
        this.subcategoriasCena
          .map(nombre => ({
            nombre,
            productos: cenas.filter(cena => cena.subcategoria === nombre)
          }))
          .filter(grupo => grupo.productos.length > 0)
      )
    );
  }

  trackById(_: number, cena: Producto): number {
    return cena.id;
  }

  getImagenUrl(cena: Producto): string {
    return cena.imagenUrl ?? 'assets/cena-tabla.svg';
  }
}
