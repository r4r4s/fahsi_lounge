import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../../models/producto'; 
import { ProductoService } from '../../services/producto'; 

@Component({
  selector: 'app-copas',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './copas.html',
  styleUrl: './copas.css'
})
export class Copas implements OnInit {

  private readonly subcategorias = ['Whisky', 'Gin', 'Vodka', 'Ron', 'Licores', 'Chupitos'] as const;

  public copasPorSubcategoria$!: Observable<{ nombre: string; productos: Producto[] }[]>;
  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    
    this.copasPorSubcategoria$ = this.productoService.getProductosPorCategoria('Copa').pipe(
      map(copas => this.subcategorias
        .map(nombre => ({
          nombre,
          productos: copas.filter(copa => copa.subcategoria === nombre)
        }))
        .filter(grupo => grupo.productos.length > 0)
      )
    );
  }
}
