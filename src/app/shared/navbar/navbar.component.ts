import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PortfolioFilterService } from '../services/portfolio-filter.service';
import { NgClass } from '@angular/common';
import { MenuItem } from './shared-menu/shared-menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  mobileNavOpen = false;
  activeMenu: string | null = null;
  private menuTimer: any = null;
  productsOpen = false;


  automationOpen = false;
  aiOfferingsOpen = false;
  solutionsOpen = false;

  productItems: MenuItem[] = [
    { title: 'vSuite Billing',        icon: 'bi-receipt',      iconColor: '#2563eb', link: '/products/billing' },
    { title: 'vSuite Accounting',     icon: 'bi-calculator',   iconColor: '#16a34a', link: '/products/accounting' },
    { title: 'vSuite Payroll',        icon: 'bi-cash-stack',   iconColor: '#059669', link: '/products/payroll' },
    { title: 'vSuite Human Resource', icon: 'bi-person-badge', iconColor: '#7c3aed', link: '/products/hr' },
    { title: 'vSuite Ecommerce',      icon: 'bi-cart3',        iconColor: '#ea580c', link: '/products/ecommerce' },
    { title: 'vSuite Process Flow',   icon: 'bi-diagram-3',    iconColor: '#0891b2', link: '/products/processflow' }
  ];

  automationItems: MenuItem[] = [
    { title: 'RPA', description: 'Automate rule-based, repetitive activities such as data entry and system interactions.', icon: 'bi-robot', iconColor: '#4f46e5', link: '/service/automation/rpa' },
    { title: 'Workflows', description: 'Define structured processes with approvals, conditions, and automated consistency.', icon: 'bi-diagram-3', iconColor: '#0891b2', link: '/service/automation/workflows' },
    { title: 'Integrations', description: 'Connect your business systems seamlessly from ERP and CRM to specialized platforms.', icon: 'bi-plug', iconColor: '#d97706', link: '/service/automation/integrations' }
  ];

  aiItems: MenuItem[] = [
    { title: 'LLM Development', description: 'Build intelligent applications powered by custom Large Language Models.', icon: 'bi-chat-dots', iconColor: '#9333ea', link: '/service/ai/llm-development' },
    { title: 'RAG Solutions', description: 'Deliver accurate, context-aware AI responses using your specific data.', icon: 'bi-search', iconColor: '#db2777', link: '/service/ai/rag-solutions' },
    { title: 'AI Consulting', description: 'Strategic guidance to identify AI opportunities and define implementation roadmaps.', icon: 'bi-lightbulb', iconColor: '#ca8a04', link: '/service/ai/ai-consulting' },
    { title: 'AI Automation', description: 'Combine AI with automation to handle complex and unstructured business tasks.', icon: 'bi-gear', iconColor: '#2563eb', link: '/service/ai/ai-automation' }
  ];

  solutionItems: MenuItem[] = [
    { title: 'Finance', description: 'Streamline billing, accounting, and cash flow visibility with GST-ready solutions.', icon: 'bi-bank', iconColor: '#1d4ed8', link: '/service/solutions/finance' },
    { title: 'Commerce', description: 'Sell smarter and scale faster with modern storefronts and omnichannel management.', icon: 'bi-bag', iconColor: '#e11d48', link: '/service/solutions/commerce' },
    { title: 'Workforce', description: 'Simplify people operations from payroll processing to employee lifecycle management.', icon: 'bi-person-workspace', iconColor: '#16a34a', link: '/service/solutions/workforce' },
    { title: 'Logistics', description: 'Optimize shipping operations through intelligent document retrieval and reconciliation.', icon: 'bi-box-seam', iconColor: '#92400e', link: '/service/solutions/logistics' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private portfolioFilter: PortfolioFilterService,
    private router: Router
  ) {}

  ngOnInit(): void {}


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

  onMenuEnter(menu: string): void {
    if (this.menuTimer) { clearTimeout(this.menuTimer); this.menuTimer = null; }
    this.activeMenu = menu;
  }

  onMenuLeave(): void {
    this.menuTimer = setTimeout(() => { this.activeMenu = null; }, 120);
  }

  toggleProducts(): void { this.productsOpen = !this.productsOpen; }
  toggleAutomation(): void { this.automationOpen = !this.automationOpen; }
  toggleAiOfferings(): void { this.aiOfferingsOpen = !this.aiOfferingsOpen; }
  toggleSolutions(): void { this.solutionsOpen = !this.solutionsOpen; }

  async scrollToSection(sectionId: string): Promise<void> {
    this.closeMobileNav();
    if (!isPlatformBrowser(this.platformId)) return;

    const currentPath = this.router.url.split('#')[0].split('?')[0];
    if (currentPath !== '/') {
      await this.router.navigate(['/'], { fragment: sectionId });
      setTimeout(() => this.scrollElementIntoView(sectionId), 0);
      return;
    }

    await this.router.navigate([], { fragment: sectionId });
    this.scrollElementIntoView(sectionId);
  }

  private scrollElementIntoView(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isHome(): boolean {
    return this.router.url === '/' || this.router.url.split('#')[0] === '/' || this.router.url === '';
  }

  onLogoClick(event: MouseEvent): void {
    event.preventDefault();
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = '/';
    }
  }
}
