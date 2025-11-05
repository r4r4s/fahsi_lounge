import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
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

  

public copas$!: Observable<Producto[]>;
  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    
    this.copas$ = this.productoService.getProductosPorCategoria('Copa');
  }
}