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
      <!-- Ambient glow blobs -->
      <div class="preloader-glow preloader-glow-1"></div>
      <div class="preloader-glow preloader-glow-2"></div>
      <div class="preloader-glow preloader-glow-3"></div>

      <!-- Floating particles -->
      <div class="preloader-particles">
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
      </div>

      <div class="preloader-inner">
        <!-- Orbital spinner rings around logo -->
        <div class="preloader-orbit-wrap">
          <div class="preloader-ring ring-outer"></div>
          <div class="preloader-ring ring-middle"></div>
          <div class="preloader-ring ring-inner"></div>
          <!-- Logo centred inside rings -->
          <div class="preloader-logo-wrap">
            <img src="assets/Lotus.svg" alt="Vishva Technologies" class="preloader-logo">
          </div>
        </div>

        <!-- Brand text -->
        <div class="preloader-brand">
          <p class="preloader-tagline">VISHVA TECHNOLOGIES</p>
          <p class="preloader-sub">Building Tomorrow's Solutions</p>
        </div>

        <!-- Progress bar -->
        <div class="preloader-progress">
          <div class="preloader-progress-bar"></div>
          <div class="preloader-progress-glow"></div>
        </div>

        <!-- Loading dots -->
        <div class="preloader-dots">
          <span></span><span></span><span></span>
        </div>
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
      setTimeout(() => { this.preloaderDone = true; }, 2800);
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
    const aosConfig = {
      duration: 500,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 40,
    };
    if (win.AOS) {
      win.AOS.init(aosConfig);
    } else {
      window.addEventListener('load', () => {
        if (win.AOS) win.AOS.init(aosConfig);
      });
    }
  }
}
