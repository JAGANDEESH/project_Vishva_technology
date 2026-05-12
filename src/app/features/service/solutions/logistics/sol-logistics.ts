import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-sol-logistics',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './sol-logistics.html',
  styleUrl: './sol-logistics.scss'
})
export class SolLogisticsComponent {
  capabilities = [
    { icon: 'bi-geo-alt',          title: 'Shipment Tracking',       description: 'Live end-to-end shipment visibility with real-time carrier updates and proactive delay alerts.' },
    { icon: 'bi-truck',            title: 'Carrier Management',      description: 'Integrate with 100+ carriers, compare rates instantly, and auto-assign the best shipping option.' },
    { icon: 'bi-file-earmark-zip', title: 'Document Automation',     description: 'Auto-generate waybills, e-PODs, invoices, and customs documents with zero manual data entry.' },
    { icon: 'bi-map',              title: 'Route Optimization',      description: 'AI-driven routing that reduces delivery distance, fuel costs, and time-on-road by up to 35%.' },
    { icon: 'bi-building',         title: 'Warehouse Operations',    description: 'Optimize put-away, picking, and packing workflows with barcode scanning and slot management.' },
    { icon: 'bi-arrow-return-left',title: 'Returns Management',      description: 'Streamline reverse logistics with automated return labels, inspection workflows, and refund triggers.' }
  ];

  whyChoose = [
    'Real-time tracking across all carriers',
    'Multi-carrier rate comparison and auto-select',
    'Automated ePOD and proof of delivery',
    'AI-driven route and load optimization',
    'Dispute resolution and freight audit tools',
    'API-first architecture for any ERP or WMS'
  ];

  businessImpact = [
    { icon: 'bi-piggy-bank',     value: '40%',     label: 'Logistics Cost Reduction' },
    { icon: 'bi-clock-history',  value: '98%',     label: 'On-Time Delivery Rate' },
    { icon: 'bi-truck-front',    value: '100+',    label: 'Carrier Integrations' },
    { icon: 'bi-lightning-charge',value: '3×',     label: 'Throughput Increase' }
  ];
}
