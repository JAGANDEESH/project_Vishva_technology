import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-vsuite-finance',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class VsuiteFinanceComponent {
  pageData: ProductPageData = {
    themeColor: '#0d6efd',
    pageBgColor: '#eef2ff',
    hero: {
      badgeIcon: 'bi-bank',
      badgeText: 'vSuite Finance Suite',
      title: 'Smarter Finance Starts Here.',
      description: 'Unified billing and accounting intelligence designed for modern businesses. Manage invoices, ledgers, compliance, and cash flow from one powerful platform.',
      imageSrc: 'assets/img/Financial_solution.jpg',
      imageAlt: 'vSuite Finance platform',
      imageCaptionText: 'Unified finance workspace for modern businesses',
      features: [
        { icon: 'bi-receipt', text: 'vSuite Billing' },
        { icon: 'bi-calculator', text: 'vSuite Accounting' },
        { icon: 'bi-graph-up', text: 'Real-time Insights' },
        { icon: 'bi-shield-check', text: 'Compliance Ready' }
      ],
      primaryButton: { text: 'Start Free Trial', link: '', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'Explore Products', link: '/products/billing' },
      stats: [
        { value: '70%', label: 'Reduce Manual Effort' },
        { value: '100%', label: 'Cash Flow Visibility' },
        { value: 'Zero-Risk', label: 'Statutory Compliance' },
        { value: '99.9%', label: 'Secure Cloud Infra' }
      ]
    },
    keyFeatures: {
      title: 'Two Pillars, One Mission',
      description: 'vSuite Finance combines intelligent billing with comprehensive accounting for complete financial control.',
      groups: [
        {
          category: 'vSuite Billing',
          icon: 'bi-receipt',
          items: [
            'GST Compliance (CGST, SGST, IGST)',
            'UPI / QR-based payment support',
            'Automated payment reminders',
            'AI-assisted invoice creation'
          ]
        },
        {
          category: 'vSuite Accounting',
          icon: 'bi-calculator',
          items: [
            'Real-time financial insights',
            'Bank reconciliation automation',
            'AI-driven forecasting',
            'Multi-user role-based access'
          ]
        }
      ]
    },
    workflow: {
      eyebrow: 'End-to-end finance',
      title: 'One unified platform for all your financial operations.',
      description: 'Streamline billing, accounting, compliance, and reporting with intelligent automation and real-time visibility.',
      steps: [
        { title: 'Invoice', icon: 'bi-file-earmark-plus', description: 'Create professional GST-ready invoices with automated tax mapping and customer management.' },
        { title: 'Account', icon: 'bi-journal-text', description: 'Record transactions, manage ledgers, and reconcile accounts with intelligent automation.' },
        { title: 'Analyze', icon: 'bi-bar-chart-line', description: 'Generate real-time P&L statements, cash flow forecasts, and compliance-ready reports.' }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge-fill',
      title: 'Ready to transform your financial operations?',
      description: 'Join businesses using vSuite Finance to automate, analyze, and grow smarter.',
      buttonText: 'Get Started Today',
      buttonLink: ''
    }
  };
}
