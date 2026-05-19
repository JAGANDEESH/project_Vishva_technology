import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-accounting',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class AccountingComponent {
  pageData: ProductPageData = {
    themeColor: '#059ABC',
    hero: {
      badgeIcon: 'bi-calculator',
      badgeText: 'vSuite Accounting Platform',
      title: 'Comprehensive Accounting Made Simple & Scalable',
      description: 'A complete financial management system for modern businesses — manage ledgers, automate billing cycles, track expenses, and generate real-time insights.',
      imageSrc: 'assets/img/vs suitable image/Accounting.jpg',
      imageAlt: 'vSuite Accounting platform',
      imageCaptionText: 'Full-spectrum financial management workspace',
      features: [
        { icon: 'bi-receipt', text: 'Smart Billing' },
        { icon: 'bi-journal-text', text: 'Ledger Management' },
        { icon: 'bi-cash-coin', text: 'Cash Flow' },
        { icon: 'bi-graph-up', text: 'Business Insights' }
      ],
      primaryButton: { text: 'Start Free Trial', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'View Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [
        { value: '70%', label: 'Manual Effort Reduction' },
        { value: '100%', label: 'Cash Flow Visibility' },
        { value: 'Zero-Risk', label: 'Statutory Compliance' },
        { value: '3×', label: 'Faster Invoice Cycle' }
      ]
    },
    keyFeatures: {
      title: 'All-in-One Financial Management',
      description: 'Everything you need to manage your business finances efficiently.',
      groups: [
        { category: 'Smart Billing', icon: 'bi-receipt', description: 'Create GST-compliant invoices, automate billing cycles, and track every payment effortlessly.' },
        { category: 'Accounting & Ledger', icon: 'bi-journal-text', description: 'Maintain accurate financial records, manage ledgers, and track expenses in one unified system.' },
        { category: 'Payments & Cash Flow', icon: 'bi-cash-coin', description: 'Monitor receivables, manage cash flow, and accelerate collections with smart reminders.' },
        { category: 'Inventory Management', icon: 'bi-box-seam', description: 'Track stock in real time with alerts, insights, and seamless billing integration.' },
        { category: 'Business Insights', icon: 'bi-graph-up', description: 'Access real-time dashboards, reports, and analytics to make smarter financial decisions.' }
      ]
    },
    workflow: {
      eyebrow: 'Built for finance teams',
      title: 'From ledger entries to financial reports in one flow.',
      description: 'vSuite Accounting gives teams clarity on every transaction, automates routine bookkeeping, and generates compliance-ready reports.',
      steps: [
        { title: 'Record', icon: 'bi-pencil-square', description: 'Capture transactions with automated categorization and tax mapping.' },
        { title: 'Reconcile', icon: 'bi-check2-all', description: 'Match bank statements, resolve discrepancies, and keep books audit-ready.' },
        { title: 'Report', icon: 'bi-file-earmark-bar-graph', description: 'Generate P&L, balance sheets, GST returns, and custom financial reports.' }
      ]
    },
    aiFeatures: {
      title: 'Why Choose vSuite Accounting?',
      description: 'Intelligent financial management with enterprise-grade features.',
      features: [
        { title: 'All-in-one billing + accounting', icon: 'bi-layers', description: 'Unified invoicing, bookkeeping, and reporting in a single workspace.' },
        { title: 'GST-ready and compliant', icon: 'bi-shield-check', description: 'Automatic GST calculations, return preparation, and compliance filing.' },
        { title: 'Clean & powerful interface', icon: 'bi-display', description: 'Easy to use without sacrificing depth needed by growing businesses.' },
        { title: 'Scalable and future-ready', icon: 'bi-rocket-takeoff', description: 'From solo practitioners to multi-branch enterprises.' }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge-fill',
      title: 'Ready to simplify your accounting?',
      description: 'Join businesses using vSuite Accounting for complete financial clarity.',
      buttonText: 'Get Started Today',
      buttonLink: '#appointment'
    }
  };
}
