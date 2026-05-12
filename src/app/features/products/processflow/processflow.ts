import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-processflow',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './processflow.html',
  styleUrl: './processflow.scss'
})
export class ProcessflowComponent {
  capabilities = [
    {
      title: 'Automated Retrieval',
      description: 'Automatically fetch Bill of Lading (BL) and invoices from portals, emails, or integrated systems.',
      icon: 'bi-download'
    },
    {
      title: 'Smart Data Extraction',
      description: 'Extract key info like BL numbers, shipment details, and invoice values using intelligent OCR.',
      icon: 'bi-search'
    },
    {
      title: 'System Integration',
      description: 'Seamlessly push extracted data into payment systems, receipt systems, and accounting platforms.',
      icon: 'bi-shuffle'
    },
    {
      title: 'Reconciliation & Reporting',
      description: 'Monitor missing documents, payment mismatches, and shipment status through a unified dashboard.',
      icon: 'bi-check-all'
    }
  ];

  whyChoose = [
    'Eliminates manual BL & invoice processing',
    'Intelligent OCR extracts data instantly',
    'Integrates with any ERP or payment system',
    'Real-time reconciliation dashboard',
    'Scales with your logistics volume',
    'Dedicated onboarding and support'
  ];

  businessImpact = [
    { label: 'Processing Time Cut',      value: '70%',  icon: 'bi-lightning-charge' },
    { label: 'Manual Errors Reduced',    value: '95%',  icon: 'bi-bug'              },
    { label: 'Reconciliation Accuracy',  value: '100%', icon: 'bi-check-all'        },
    { label: 'Faster Document Turnaround', value: '10×', icon: 'bi-arrow-repeat'    }
  ];
}
