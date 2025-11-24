import { Component, OnInit, signal } from '@angular/core';
import { NgIf } from '@angular/common';

const STORAGE_KEY = 'fahsi-cookie-consent';

@Component({
  selector: 'app-cookies-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cookies-banner.html',
  styleUrl: './cookies-banner.css'
})
export class CookiesBanner implements OnInit {
  protected readonly isVisible = signal(false);

  ngOnInit(): void {
    const hasConsent = this.readConsent();

    if (!hasConsent) {
      this.isVisible.set(true);
    }
  }

  accept(): void {
    this.persistConsent('accepted');
    this.isVisible.set(false);
  }

  onlyEssential(): void {
    this.persistConsent('essential');
    this.isVisible.set(false);
  }

  private readConsent(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  private persistConsent(value: string): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignored: fallback is keeping the banner closed for this session.
    }
  }
}
