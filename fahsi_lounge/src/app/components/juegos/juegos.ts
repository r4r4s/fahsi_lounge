import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto'; 
import { ProductoService } from '../../services/producto';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './juegos.html',
  styleUrl: './juegos.css'
})
export class Juegos implements OnInit {

  
  public juegos$!: Observable<Producto[]>;

  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    
    this.juegos$ = this.productoService.getProductosPorCategoria('Juego');
  }
}