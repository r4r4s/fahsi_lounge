import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto'; 
import { ProductoService } from '../../services/producto'; 

@Component({
  selector: 'app-cachimbas',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './cachimbas.html',
  styleUrl: './cachimbas.css'
})
export class Cachimbas implements OnInit {

  
  public cachimbas$!: Observable<Producto[]>;

  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    
    this.cachimbas$ = this.productoService.getProductosPorCategoria('Cachimba');
  }
}