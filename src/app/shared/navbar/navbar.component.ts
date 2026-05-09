import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass, NgIf } from '@angular/common';
import { PortfolioFilterService } from '../services/portfolio-filter.service';
import { ProductMenuComponent } from './product-menu/product-menu';
import { AutomationMenuComponent } from './automation-menu/automation-menu';
import { AiOfferingsMenuComponent } from './ai-offerings-menu/ai-offerings-menu';
import { SolutionsMenuComponent } from './solutions-menu/solutions-menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf, ProductMenuComponent, AutomationMenuComponent, AiOfferingsMenuComponent, SolutionsMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  mobileNavOpen = false;
  productsOpen = false;
  automationOpen = false;
  aiOfferingsOpen = false;
  solutionsOpen = false;

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
        this.closeAllAccordions();
      }
    }
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
    this.closeAllAccordions();
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('mobile-nav-active');
    }
  }

  private closeAllAccordions(): void {
    this.productsOpen = false;
    this.automationOpen = false;
    this.aiOfferingsOpen = false;
    this.solutionsOpen = false;
  }

  toggleProducts(): void { this.productsOpen = !this.productsOpen; }
  toggleAutomation(): void { this.automationOpen = !this.automationOpen; }
  toggleAiOfferings(): void { this.aiOfferingsOpen = !this.aiOfferingsOpen; }
  toggleSolutions(): void { this.solutionsOpen = !this.solutionsOpen; }

  scrollToSection(sectionId: string): void {
    this.closeMobileNav();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
