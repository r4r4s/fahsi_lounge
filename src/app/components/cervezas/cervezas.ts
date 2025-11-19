import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto'; 
import { ProductoService } from '../../services/producto'; 

@Component({
  selector: 'app-cervezas',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './cervezas.html',
  styleUrl: './cervezas.css'
})
export class Cervezas implements OnInit {

  
  public cervezas$!: Observable<Producto[]>;

  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    
    this.cervezas$ = this.productoService.getProductosPorCategoria('Cerveza');
  }
}