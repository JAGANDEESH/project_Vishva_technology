import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accounting',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './accounting.html',
  styleUrl: './accounting.scss'
})
export class AccountingComponent {
  capabilities = [
    {
      title: 'Smart Billing',
      description: 'Create GST-compliant invoices, automate billing, and track payments effortlessly.',
      icon: 'bi-receipt'
    },
    {
      title: 'Accounting & Ledger',
      description: 'Maintain accurate financial records, manage ledgers, and track expenses in one unified system.',
      icon: 'bi-journal-text'
    },
    {
      title: 'Payments & Cash Flow',
      description: 'Monitor receivables, manage cash flow, and accelerate collections with smart reminders.',
      icon: 'bi-cash-coin'
    },
    {
      title: 'Inventory Management',
      description: 'Track stock in real time with alerts, insights, and seamless billing integration.',
      icon: 'bi-box-seam'
    },
    {
      title: 'Business Insights',
      description: 'Access real-time dashboards, reports, and analytics to make smarter financial decisions.',
      icon: 'bi-graph-up'
    }
  ];

  whyChoose = [
    'All-in-one billing + accounting platform',
    'Built for modern and growing businesses',
    'GST-ready and compliant (India 🇮🇳)',
    'Clean, intuitive, and powerful interface',
    'Scalable and future-ready'
  ];

  businessImpact = [
    { label: 'Manual Effort Reduction', value: '70%', icon: 'bi-clock-history' },
    { label: 'Cash Flow Visibility', value: '100%', icon: 'bi-eye' },
    { label: 'Statutory Compliance', value: 'Zero-Risk', icon: 'bi-shield-check' }
  ];
}
