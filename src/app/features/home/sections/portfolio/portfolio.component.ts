import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { PortfolioFilterService } from '../../../../shared/services/portfolio-filter.service';

interface SolutionItem {
  title: string;
  category: string;
  tag: string;
  description: string;
  img: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  activeFilter = 'all';
  private filterSub!: Subscription;

  constructor(private portfolioFilter: PortfolioFilterService) {}

  ngOnInit(): void {
    this.filterSub = this.portfolioFilter.filter$.subscribe(f => {
      this.activeFilter = f;
    });
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

  filters = [
    { key: 'all', label: 'All Solutions' },
    { key: 'finance', label: 'Finance' },
    { key: 'commerce', label: 'Commerce' },
    { key: 'workforce', label: 'Workforce' },
    { key: 'logistics', label: 'Logistics' }
  ];

  projects: SolutionItem[] = [
    {
      title: 'Smart Billing & Invoicing',
      category: 'finance',
      tag: 'Finance',
      description: 'Instant GST-compliant invoice generation with UPI/QR payment support, automated reminders, recurring billing, and real-time sales dashboard for modern businesses.',
      img: 'assets/img/gallery/gallery-1.jpg',
      icon: 'bi-receipt',
      color: '#2B70D4'
    },
    {
      title: 'Intelligent Accounting',
      category: 'finance',
      tag: 'Finance',
      description: 'Complete financial management with general ledger, journal entries, expense tracking, GST compliance, bank reconciliation, and AI-driven financial forecasting.',
      img: 'assets/img/gallery/gallery-2.jpg',
      icon: 'bi-calculator',
      color: '#2B70D4'
    },
    {
      title: 'Automated Payroll',
      category: 'workforce',
      tag: 'Workforce',
      description: 'Accurate salary processing with automated PF/ESI/TDS compliance, payslip generation, UPI salary disbursement, reimbursements, and AI-assisted anomaly detection.',
      img: 'assets/img/gallery/gallery-3.jpg',
      icon: 'bi-cash-stack',
      color: '#28a745'
    },
    {
      title: 'HR Management Suite',
      category: 'workforce',
      tag: 'Workforce',
      description: 'End-to-end employee lifecycle management including onboarding, attendance, leave tracking, performance appraisals, self-service portal, and workforce analytics.',
      img: 'assets/img/gallery/gallery-4.jpg',
      icon: 'bi-person-badge',
      color: '#28a745'
    },
    {
      title: 'E-Commerce Storefront',
      category: 'commerce',
      tag: 'Commerce',
      description: 'Modern online store with customizable themes, product catalog management, seamless cart & checkout, multi-payment support, and AI-powered product recommendations.',
      img: 'assets/img/gallery/gallery-5.jpg',
      icon: 'bi-cart4',
      color: '#fd7e14'
    },
    {
      title: 'Omnichannel Commerce',
      category: 'commerce',
      tag: 'Commerce',
      description: 'Unified selling across web, mobile, and social commerce with order tracking, fulfilment management, abandoned cart recovery, and integrated sales analytics.',
      img: 'assets/img/gallery/gallery-6.jpg',
      icon: 'bi-shop',
      color: '#fd7e14'
    },
    {
      title: 'Logistics Document Automation',
      category: 'logistics',
      tag: 'Logistics',
      description: 'Auto-download Bill of Lading and invoices from multiple vendor portals, with support for email, API, and web-based sources and vendor-wise scheduling.',
      img: 'assets/img/gallery/gallery-7.jpg',
      icon: 'bi-file-earmark-text',
      color: '#6f42c1'
    },
    {
      title: 'ERP Integration & Reconciliation',
      category: 'logistics',
      tag: 'Logistics',
      description: 'Intelligent data extraction, validation against business rules, BL-to-invoice matching, exception handling, and direct ERP push for payments and receipts.',
      img: 'assets/img/gallery/gallery-8.jpg',
      icon: 'bi-arrow-repeat',
      color: '#6f42c1'
    }
  ];

  get filteredProjects(): SolutionItem[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(key: string): void {
    this.portfolioFilter.setFilter(key);
  }
}
