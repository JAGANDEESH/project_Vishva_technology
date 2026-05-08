import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioFilterService } from '../services/portfolio-filter.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  mobileNavOpen = false;
  portfolioOpen = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private portfolioFilter: PortfolioFilterService
  ) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 100;
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
    if (isPlatformBrowser(this.platformId)) {
      if (this.mobileNavOpen) {
        document.body.classList.add('mobile-nav-active');
      } else {
        document.body.classList.remove('mobile-nav-active');
        this.portfolioOpen = false;
      }
    }
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
    this.portfolioOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('mobile-nav-active');
    }
  }

  togglePortfolio(): void {
    this.portfolioOpen = !this.portfolioOpen;
  }

  scrollToSection(sectionId: string): void {
    this.closeMobileNav();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  goToPortfolio(filter: string): void {
    this.portfolioFilter.setFilter(filter);
    this.scrollToSection('portfolio');
  }
}
