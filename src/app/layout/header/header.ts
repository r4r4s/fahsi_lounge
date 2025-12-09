import { Component, ElementRef, ViewChild, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  private elementRef = inject(ElementRef);

  @ViewChild('navbarNav')
  private navbarNav?: ElementRef<HTMLElement>;

  @ViewChild('navbarToggler')
  private navbarToggler?: ElementRef<HTMLButtonElement>;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeNavbarOnMobile();
    }
  }

  closeNavbarOnMobile(): void {
    const collapseElement = this.navbarNav?.nativeElement;
    const togglerElement = this.navbarToggler?.nativeElement;

    if (!collapseElement || !togglerElement) {
      return;
    }

    const isTogglerVisible = window.getComputedStyle(togglerElement).display !== 'none';

    if (!isTogglerVisible) {
      return;
    }

    const collapseInstance = Collapse.getInstance(collapseElement) ?? new Collapse(collapseElement, { toggle: false });
    collapseInstance.hide();

    togglerElement.classList.add('collapsed');
    togglerElement.setAttribute('aria-expanded', 'false');
  }
}
