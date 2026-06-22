import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class BillingComponent {
  pageData: ProductPageData = {
    themeColor: '#198754',
    pageBgColor: '#94d673ff',
    hero: {
      badgeIcon: 'bi-shield-check',
      badgeText: 'Trusted Billing Platform',
      title: 'Smart Billing Software for Modern Businesses',
      description: 'Manage invoices, automate GST calculations, track payments, and streamline financial operations with an intelligent cloud-based billing platform built for growing businesses.',
      imageSrc: 'assets/img/vs%20suitable%20image/shared%20image%20(4).jpg',
      imageAlt: 'vSuite Billing software preview',
      imageCaptionText: 'Cloud billing workspace with GST-ready workflows',
      features: [
        { icon: 'bi-receipt-cutoff', text: 'GST Compliant' },
        { icon: 'bi-bar-chart-line', text: 'Real-time Reporting' },
        { icon: 'bi-lightning-charge', text: 'Automated Invoicing' },
        { icon: 'bi-cloud-check', text: 'Secure Cloud Access' }
      ],
      primaryButton: { text: 'Start Free Trial', link: '', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'Schedule Demo', link: '' },
      stats: [
        { value: '500+', label: 'Businesses' },
        { value: '99.9%', label: 'Uptime' },
        { value: '10x', label: 'Faster Billing' },
        { value: 'India', label: 'Trusted Network' }
      ]
    },
    keyFeatures: {
      title: 'Comprehensive Key Features',
      description: 'Everything you need to manage your business efficiently in one unified and secure platform.',
      groups: [
        {
          category: 'Billing & Invoicing',
          icon: 'bi-receipt',
          items: [
            'Create GST-compliant invoices with CGST, SGST, and IGST mapped automatically.',
            'Generate bills quickly with barcode, QR, and customer-ready invoice formats.',
            'Accept and record multiple payment methods without manual reconciliation gaps.',
            'Print, download, and email invoices directly from the billing workspace.',
            'Manage credit notes and debit notes with clean audit-friendly transaction history.'
          ]
        },
        {
          category: 'Inventory Management',
          icon: 'bi-box-seam',
          items: [
            'Track stock movement in real time across sales, returns, and purchase entries.',
            'Set low-stock alerts and reorder points so fast-moving items stay available.',
            'Maintain batch, expiry, and product-level details for better inventory control.',
            'Organize supplier records, purchase history, and pricing in one reliable place.',
            'Support multiple warehouses with clearer visibility into available quantities.'
          ]
        },
        {
          category: 'Sales & Reports',
          icon: 'bi-graph-up-arrow',
          items: [
            'Review daily and monthly sales performance with finance-ready summaries.',
            'Understand profit, expenses, and margins through simplified P&L views.',
            'Identify top-selling items and slow movers with item-wise sales analytics.',
            'Prepare GST reports including GSTR-1 and GSTR-3B with less manual effort.',
            'Monitor cash flow, pending payments, and collection trends from one dashboard.'
          ]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built for daily finance teams',
      title: 'From invoice creation to payment tracking in one clean workflow.',
      description: 'vSuite Billing helps teams reduce manual follow-ups, prepare GST records faster, and keep every transaction visible from a single cloud workspace.',
      steps: [
        { title: 'Create', icon: 'bi-file-earmark-plus', description: 'Generate professional invoices with customer details, tax logic, item rates, discounts, and payment terms already structured.' },
        { title: 'Track', icon: 'bi-activity', description: 'Follow every invoice from draft to paid, with clear payment status, due dates, and outstanding balance visibility.' },
        { title: 'Report', icon: 'bi-bar-chart-line', description: 'Turn billing activity into GST summaries, sales reports, and management insights your team can act on quickly.' }
      ]
    },
    aiFeatures: {
      title: 'Smart & AI-Driven Features',
      description: 'Use intelligent automation to reduce repetitive finance work, improve accuracy, and surface the insights your team needs before month-end pressure builds.',
      features: [
        { title: 'AI Invoice Auto-Creation', icon: 'bi-magic', description: 'Generate invoices from purchase orders, emails, or message-based requests using intelligent extraction and pre-filled billing fields.' },
        { title: 'Smart Expense Categorization', icon: 'bi-tags', description: 'Automatically organize expenses by category, vendor, and business purpose so reporting stays consistent and easier to review.' },
        { title: 'Cash Flow Prediction', icon: 'bi-graph-up-arrow', description: 'Forecast incoming collections, expected outflows, and short-term cash positions using past billing and payment behavior.' },
        { title: 'Anomaly Detection', icon: 'bi-shield-exclamation', description: 'Flag unusual invoice amounts, duplicate entries, and inconsistent payment patterns before they become finance issues.' }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge-fill',
      title: 'Ready to simplify your billing process?',
      description: 'Join hundreds of forward-thinking businesses using vSuite to scale faster and smarter.',
      buttonText: 'Join vSuite Today',
      buttonLink: ''
    }
  };
}
