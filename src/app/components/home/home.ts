import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- 1. IMPORTAR ESTO

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink // <-- 2. AÑADIR ESTO AQUÍ
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}