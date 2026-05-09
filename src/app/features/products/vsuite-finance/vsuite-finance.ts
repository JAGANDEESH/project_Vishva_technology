import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vsuite-finance',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './vsuite-finance.html',
  styleUrl: './vsuite-finance.scss'
})
export class VsuiteFinanceComponent {
  tagline = 'Smarter Finance Starts Here.';
  
  financePillars = [
    {
      title: 'vSuite Billing',
      icon: 'bi-receipt',
      description: 'Smart, fast, and GST-ready billing designed for modern businesses. Build professional invoices and manage payments with minimal effort.',
      link: '/products/billing',
      highlights: [
        'GST Compliance (CGST, SGST, IGST)',
        'UPI / QR-based payment support',
        'Automated payment reminders',
        'AI-assisted invoice creation'
      ]
    },
    {
      title: 'vSuite Accounting',
      icon: 'bi-calculator',
      description: 'Comprehensive accounting made simple, intelligent, and scalable. A complete financial management system for ledgers and reporting.',
      link: '/products/accounting',
      highlights: [
        'Real-time financial insights',
        'Bank reconciliation automation',
        'AI-driven forecasting',
        'Multi-user role-based access'
      ]
    }
  ];

  benefits = [
    {
      title: 'Reduce Manual Effort',
      value: '70%',
      description: 'Automate repetitive accounting tasks and focus on strategic growth.'
    },
    {
      title: 'Cash Flow Visibility',
      value: '100%',
      description: 'Get real-time insights into your financial health and projections.'
    },
    {
      title: 'Statutory Compliance',
      value: 'Zero-Risk',
      description: 'Stay worry-free with automated GST and tax reporting features.'
    }
  ];
}
