import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
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
  isScrolled = false;
  mobileNavOpen = false;
  productsOpen = false;
  vSuiteOpen = false;
  vSuiteFinanceOpen = false;
  vSuiteWorkforceOpen = false;
  vSuiteCommerceOpen = false;
  vSuiteLogisticsOpen = false;

  automationOpen = false;
  aiOfferingsOpen = false;
  solutionsOpen = false;

  productItems: MenuItem[] = [
    {
      title: 'vSuite',
      children: [
        {
          title: 'vSuite Finance',
          children: [
            { title: 'vSuite Billing', link: '/products/billing' },
            { title: 'vSuite Accounting', link: '/products/accounting' }
          ]
        },
        {
          title: 'vSuite Workforce',
          children: [
            { title: 'vSuite Payroll', link: '/products/payroll' },
            { title: 'vSuite Workbench', link: '/products/hr' }
          ]
        },
        {
          title: 'vSuite Commerce',
          children: [
            { title: 'vSuite E-Commerce', link: '/products/ecommerce' }
          ]
        },
        {
          title: 'vSuite Logistics',
          children: [
            { title: 'vSuite ProcessFlow', link: '/products/processflow' }
          ]
        }
      ]
    }
  ];

  automationItems: MenuItem[] = [
    { title: 'RPA', description: 'Automate rule-based, repetitive activities such as data entry and system interactions.', icon: 'bi-robot', link: '/service/automation/rpa' },
    { title: 'Workflows', description: 'Define structured processes with approvals, conditions, and automated consistency.', icon: 'bi-diagram-3', link: '/service/automation/workflows' },
    { title: 'Integrations', description: 'Connect your business systems seamlessly from ERP and CRM to specialized platforms.', icon: 'bi-plug', link: '/service/automation/integrations' }
  ];

  aiItems: MenuItem[] = [
    { title: 'LLM Development', description: 'Build intelligent applications powered by custom Large Language Models.', icon: 'bi-chat-dots', link: '/service/ai/llm-development' },
    { title: 'RAG Solutions', description: 'Deliver accurate, context-aware AI responses using your specific data.', icon: 'bi-search', link: '/service/ai/rag-solutions' },
    { title: 'AI Consulting', description: 'Strategic guidance to identify AI opportunities and define implementation roadmaps.', icon: 'bi-lightbulb', link: '/service/ai/ai-consulting' },
    { title: 'AI Automation', description: 'Combine AI with automation to handle complex and unstructured business tasks.', icon: 'bi-gear', link: '/service/ai/ai-automation' }
  ];

  solutionItems: MenuItem[] = [
    { title: 'Finance', description: 'Streamline billing, accounting, and cash flow visibility with GST-ready solutions.', icon: 'bi-bank', link: '/service/solutions/finance' },
    { title: 'Commerce', description: 'Sell smarter and scale faster with modern storefronts and omnichannel management.', icon: 'bi-bag', link: '/service/solutions/commerce' },
    { title: 'Workforce', description: 'Simplify people operations from payroll processing to employee lifecycle management.', icon: 'bi-person-workspace', link: '/service/solutions/workforce' },
    { title: 'Logistics', description: 'Optimize shipping operations through intelligent document retrieval and reconciliation.', icon: 'bi-box-seam', link: '/service/solutions/logistics' }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private portfolioFilter: PortfolioFilterService,
    private router: Router
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
    this.vSuiteOpen = false;
    this.vSuiteFinanceOpen = false;
    this.vSuiteWorkforceOpen = false;
    this.vSuiteCommerceOpen = false;
    this.vSuiteLogisticsOpen = false;
    this.automationOpen = false;
    this.aiOfferingsOpen = false;
    this.solutionsOpen = false;
  }

  toggleProducts(): void { this.productsOpen = !this.productsOpen; }
  toggleVSuite(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.vSuiteOpen = !this.vSuiteOpen;
  }
  toggleVSuiteFinance(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.vSuiteFinanceOpen = !this.vSuiteFinanceOpen;
  }
  toggleVSuiteWorkforce(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.vSuiteWorkforceOpen = !this.vSuiteWorkforceOpen;
  }
  toggleVSuiteCommerce(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.vSuiteCommerceOpen = !this.vSuiteCommerceOpen;
  }
  toggleVSuiteLogistics(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.vSuiteLogisticsOpen = !this.vSuiteLogisticsOpen;
  }
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
}
