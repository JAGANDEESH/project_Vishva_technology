import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-sol-finance',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './sol-finance.html',
  styleUrl: './sol-finance.scss'
})
export class SolFinanceComponent {
  capabilities = [
    { icon: 'bi-receipt-cutoff',   title: 'Invoice Automation',      description: 'Auto-generate, send, and track invoices with smart payment reminders and real-time status updates.' },
    { icon: 'bi-file-earmark-text',title: 'GST Filing & Compliance', description: 'Stay fully GST-compliant with automated return filing, reconciliation, and e-invoice generation.' },
    { icon: 'bi-graph-up-arrow',   title: 'Cash Flow Forecasting',   description: 'Predict inflows and outflows up to 90 days ahead with ML-driven cash flow models.' },
    { icon: 'bi-bank2',            title: 'Bank Reconciliation',     description: 'Automatically match transactions across accounts with smart exception flagging and one-click approvals.' },
    { icon: 'bi-wallet2',          title: 'Expense Management',      description: 'Capture, categorize, and approve expenses on the go with OCR-powered receipt scanning.' },
    { icon: 'bi-bar-chart-steps',  title: 'Financial Reporting',     description: 'Generate P&L, balance sheets, and custom dashboards with live data for informed decisions.' }
  ];

  whyChoose = [
    'GST-ready and TDS compliant out of the box',
    'Real-time bank feeds and auto-reconciliation',
    'Multi-entity and multi-currency support',
    'Bank-grade encryption and audit trails',
    'One-click financial reports and MIS',
    'Seamless ERP and accounting integrations'
  ];

  businessImpact = [
    { icon: 'bi-bullseye',         value: '99.9%',   label: 'Reconciliation Accuracy' },
    { icon: 'bi-clock-history',    value: '60%',      label: 'Time Saved on Closing' },
    { icon: 'bi-graph-up',         value: 'Real-time',label: 'Financial Dashboards' },
    { icon: 'bi-shield-check',     value: 'Zero',     label: 'GST Filing Errors' }
  ];
}
