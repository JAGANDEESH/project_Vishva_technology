import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgClass, NgIf } from '@angular/common';
import { PortfolioFilterService } from '../services/portfolio-filter.service';
import { SharedMenuComponent, MenuItem } from './shared-menu/shared-menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf, SharedMenuComponent],
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

  productItems: MenuItem[] = [
    { title: 'vSuite Billing', description: 'Smart, fast, and GST-ready billing designed for modern businesses.', icon: 'bi-receipt', link: '/products/billing' },
    { title: 'vSuite Accounting', description: 'Comprehensive accounting made simple, intelligent, and scalable.', icon: 'bi-calculator', link: '/products/accounting' },
    { title: 'vSuite PayRoll', description: 'Accurate, automated, and compliant payroll for modern organizations.', icon: 'bi-cash-stack', link: '/products/payroll' },
    { title: 'vSuite Human Resources', description: 'Smart HR management to engage, manage, and grow your workforce.', icon: 'bi-person-badge', link: '/products/hr' },
    { title: 'vSuite E-Commerce', description: 'Build, manage, and grow your online business—effortlessly.', icon: 'bi-cart4', link: '/products/ecommerce' },
    { title: 'vSuite ProcessFlow', description: 'Automate logistics documents—from retrieval to reconciliation.', icon: 'bi-arrow-repeat', link: '/products/processflow' }
  ];

  automationItems: MenuItem[] = [
    {
      title: 'RPA',
      description: 'Automate rule-based, repetitive activities such as data entry and system interactions.',
      icon: 'bi-robot',
      link: '/service/automation/rpa'
    },
    {
      title: 'Workflows',
      description: 'Define structured processes with approvals, conditions, and automated consistency.',
      icon: 'bi-diagram-3',
      link: '/service/automation/workflows'
    },
    {
      title: 'Integrations',
      description: 'Connect your business systems seamlessly from ERP and CRM to specialized platforms.',
      icon: 'bi-plug',
      link: '/service/automation/integrations'
    }
  ];

  aiItems: MenuItem[] = [
    {
      title: 'LLM Development',
      description: 'Build intelligent applications powered by custom Large Language Models.',
      icon: 'bi-chat-dots',
      link: '/service/ai/llm-development'
    },
    {
      title: 'RAG Solutions',
      description: 'Deliver accurate, context-aware AI responses using your specific data.',
      icon: 'bi-search',
      link: '/service/ai/rag-solutions'
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance to identify AI opportunities and define implementation roadmaps.',
      icon: 'bi-lightbulb',
      link: '/service/ai/ai-consulting'
    },
    {
      title: 'AI Automation',
      description: 'Combine AI with automation to handle complex and unstructured business tasks.',
      icon: 'bi-gear',
      link: '/service/ai/ai-automation'
    }
  ];

  solutionItems: MenuItem[] = [
    {
      title: 'Finance',
      description: 'Streamline billing, accounting, and cash flow visibility with GST-ready solutions.',
      icon: 'bi-bank',
      link: '/service/solutions/finance'
    },
    {
      title: 'Commerce',
      description: 'Sell smarter and scale faster with modern storefronts and omnichannel management.',
      icon: 'bi-bag',
      link: '/service/solutions/commerce'
    },
    {
      title: 'Workforce',
      description: 'Simplify people operations from payroll processing to employee lifecycle management.',
      icon: 'bi-person-workspace',
      link: '/service/solutions/workforce'
    },
    {
      title: 'Logistics',
      description: 'Optimize shipping operations through intelligent document retrieval and reconciliation.',
      icon: 'bi-box-seam',
      link: '/service/solutions/logistics'
    }
  ];

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
