import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './promociones.html',
  styleUrl: './promociones.css'
})
export class Promociones {
  // Imagenes Oferta
  images: string[] = [
    'assets/promociones/OfertaCopas.svg',
    'assets/promociones/OfertaCopasCachimba.svg'
    
  ];

  selectedImage: string | null = null;

  openLightbox(image: string): void {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden'; 
  }

  closeLightbox(): void {
    this.selectedImage = null;
    document.body.style.overflow = ''; 
  }
}
