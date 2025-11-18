import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('navbarNav')
  private navbarNav?: ElementRef<HTMLElement>;

  @ViewChild('navbarToggler')
  private navbarToggler?: ElementRef<HTMLButtonElement>;

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
