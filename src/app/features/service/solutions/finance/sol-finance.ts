import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-sol-finance',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class SolFinanceComponent {
  pageData: ProductPageData = {
    themeColor: '#2563eb',
    hero: {
      badgeIcon: 'bi-bank ms-1 me-2',
      badgeText: 'Finance Solutions',
      title: 'Complete Financial Control. Zero Complexity.',
      description: 'From invoice automation to GST filing and real-time cash flow forecasting — one integrated platform to manage every aspect of your business finances with confidence.',
      imageSrc: 'assets/img/Financial_solution.jpg',
      imageAlt: 'Finance Solutions Dashboard',
      imageCaptionIcon: 'bi-bank',
      imageCaptionText: 'GST-Ready Finance',
      features: [{"icon":"bi-patch-check","text":"GST-Ready"},{"icon":"bi-graph-up","text":"Real-time Reporting"},{"icon":"bi-bank2","text":"Auto-Reconciliation"}],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [{"icon":"bi-bullseye","value":"99.9%","label":"Reconciliation Accuracy"},{"icon":"bi-clock-history","value":"60%","label":"Time Saved on Closing"},{"icon":"bi-graph-up","value":"Real-time","label":"Financial Dashboards"},{"icon":"bi-shield-check","value":"Zero","label":"GST Filing Errors"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'End-to-end financial automation that keeps your books clean, your compliance current, and your cash flow visible.',
      groups: [
        {
          category: 'Core Capabilities',
          icon: 'bi-stars',
          items: ["Invoice Automation: Auto-generate, send, and track invoices with smart payment reminders and real-time status updates.","GST Filing & Compliance: Stay fully GST-compliant with automated return filing, reconciliation, and e-invoice generation.","Cash Flow Forecasting: Predict inflows and outflows up to 90 days ahead with ML-driven cash flow models.","Bank Reconciliation: Automatically match transactions across accounts with smart exception flagging and one-click approvals.","Expense Management: Capture, categorize, and approve expenses on the go with OCR-powered receipt scanning.","Financial Reporting: Generate P&L, balance sheets, and custom dashboards with live data for informed decisions."]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built for accuracy. Designed for growth.',
      title: 'Why Finance Solutions?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [{"title":"Advantage","icon":"bi-check-circle","description":"GST-ready and TDS compliant out of the box"},{"title":"Advantage","icon":"bi-check-circle","description":"Real-time bank feeds and auto-reconciliation"},{"title":"Advantage","icon":"bi-check-circle","description":"Multi-entity and multi-currency support"},{"title":"Advantage","icon":"bi-check-circle","description":"Bank-grade encryption and audit trails"},{"title":"Advantage","icon":"bi-check-circle","description":"One-click financial reports and MIS"},{"title":"Advantage","icon":"bi-check-circle","description":"Seamless ERP and accounting integrations"}]
    },
    cta: {
      icon: 'bi-lightning-charge',
      title: 'Ready to Take Controlof Your Finances?',
      description: 'Join thousands of businesses that rely on our platform for accurate, compliant, and intelligent financial management.',
      buttonText: 'Start Free Trial',
      buttonLink: '#appointment'
    }
  };
}
