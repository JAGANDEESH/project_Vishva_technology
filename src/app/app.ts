import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div id="preloader" [class.hide]="preloaderDone">
      <div class="preloader-glow preloader-glow-1"></div>
      <div class="preloader-glow preloader-glow-2"></div>
      <div class="preloader-inner">
        <div class="preloader-orbit-container">
          <div class="orbit orbit-3"></div>
          <div class="orbit orbit-2"></div>
          <div class="orbit orbit-1"></div>
          <div class="preloader-core">VTL</div>
        </div>
        <div class="preloader-progress"><div class="preloader-progress-bar"></div></div>
        <p class="preloader-tagline">Vishva Techno Labs</p>
        <p class="preloader-sub">Building Tomorrow's Solutions</p>
      </div>
    </div>
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <button class="scroll-top" [class.active]="showScrollTop" (click)="scrollToTop()" aria-label="Scroll to top">
      <i class="bi bi-arrow-up-short"></i>
    </button>
  `,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  preloaderDone = false;
  showScrollTop = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => { this.preloaderDone = true; }, 2200);
      this.initAOS();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private initAOS(): void {
    const win = window as any;
    if (win.AOS) {
      win.AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
    } else {
      window.addEventListener('load', () => {
        if (win.AOS) win.AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
      });
    }
  }
}
