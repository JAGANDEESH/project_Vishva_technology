import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './billing.html',
  styleUrl: './billing.scss'
})
export class BillingComponent {
  features = [
    {
      category: 'Billing & Invoicing',
      icon: 'bi-receipt',
      items: [
        'GST-compliant invoices (CGST, SGST, IGST)',
        'Quick bill generation & Barcode/QR billing',
        'Multiple payment methods support',
        'Print & Email invoices directly',
        'Credit & Debit notes management'
      ]
    },
    {
      category: 'Inventory Management',
      icon: 'bi-box-seam',
      items: [
        'Real-time stock tracking',
        'Low stock alerts & auto-reorder',
        'Batch & expiry tracking',
        'Supplier management',
        'Multi-warehouse support'
      ]
    },
    {
      category: 'Sales & Reports',
      icon: 'bi-graph-up-arrow',
      items: [
        'Daily / Monthly performance reports',
        'Profit & Loss statements',
        'Item-wise sales analytics',
        'GST reports (GSTR-1, GSTR-3B)',
        'Cash flow insights'
      ]
    }
  ];

  aiFeatures = [
    {
      title: 'AI Invoice Auto-Creation',
      description: 'Generate invoices instantly from POs, emails, or WhatsApp messages using intelligent OCR.'
    },
    {
      title: 'Smart Expense Categorization',
      description: 'Automatically tag and categorize expenses using machine learning algorithms.'
    },
    {
      title: 'Cash Flow Prediction',
      description: 'Forecast future financial positions based on historical data and market trends.'
    },
    {
      title: 'Anomaly Detection',
      description: 'Detect unusual transactions instantly to prevent fraud and errors.'
    }
  ];
}
