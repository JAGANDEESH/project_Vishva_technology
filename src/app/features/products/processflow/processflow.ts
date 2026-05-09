import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-processflow',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
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

  impacts = [
    { label: 'Processing Time reduction', value: '70%', icon: 'bi-lightning' },
    { label: 'Manual errors minimized', value: '95%', icon: 'bi-bug-fill' },
    { label: 'Reconciliation accuracy', value: '100%', icon: 'bi-graph-up' }
  ];
}
