import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async scrollToSection(sectionId: string): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;

    const currentPath = this.router.url.split('#')[0].split('?')[0];
    if (currentPath !== '/') {
      await this.router.navigate(['/'], { fragment: sectionId });
      setTimeout(() => this.scrollElementIntoView(sectionId), 100);
      return;
    }

    await this.router.navigate([], { fragment: sectionId });
    this.scrollElementIntoView(sectionId);
  }

  private scrollElementIntoView(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top for 'hero'
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
}
