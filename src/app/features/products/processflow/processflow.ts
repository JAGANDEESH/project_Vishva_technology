import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-processflow',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class ProcessflowComponent {
  pageData: ProductPageData = {
    themeColor: '#0891b2',
    hero: {
      badgeIcon: 'bi-cpu',
      badgeText: 'vSuite Process Automation',
      title: 'Automate Data.<br>Eliminate Manual Entry.',
      description: 'vSuite ProcessFlow harnesses AI-driven OCR to instantly extract, validate, and synchronize data from Bills of Lading, invoices, and receipts, directly connecting your operational documents to your core ERP systems.',
      imageSrc: 'assets/img/vs%20suitable%20image/shared image.jpg',
      imageAlt: 'vSuite ProcessFlow platform',
      imageCaptionText: 'Intelligent document processing for logistics',
      features: [
        { icon: 'bi-download', text: 'Auto Retrieval' },
        { icon: 'bi-search', text: 'Smart OCR' },
        { icon: 'bi-shuffle', text: 'System Integration' },
        { icon: 'bi-check-all', text: 'Reconciliation' }
      ],
      primaryButton: { text: 'Start Automating', link: '', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'View Demo', link: '', icon: 'bi-play-circle' },
      stats: [
        { value: '70%', label: 'Processing Time Cut' },
        { value: '95%', label: 'Manual Errors Reduced' },
        { value: '100%', label: 'Reconciliation Accuracy' },
        { value: '10×', label: 'Faster Document Turnaround' }
      ]
    },
    keyFeatures: {
      title: 'End-to-End Automation',
      description: 'Transform unstructured documents into actionable, synchronized digital assets.',
      groups: [
        { category: 'Automated Retrieval', icon: 'bi-download', description: 'Automatically fetch Bill of Lading (BL) and invoices from portals, emails, or integrated systems.' },
        { category: 'Smart Data Extraction', icon: 'bi-search', description: 'Extract key info like BL numbers, shipment details, and invoice values using intelligent OCR.' },
        { category: 'System Integration', icon: 'bi-shuffle', description: 'Seamlessly push extracted data into payment systems, receipt systems, and accounting platforms.' },
        { category: 'Reconciliation & Reporting', icon: 'bi-check-all', description: 'Monitor missing documents, payment mismatches, and shipment status through a unified dashboard.' }
      ]
    },
    workflow: {
      eyebrow: 'Built for operations teams',
      title: 'From document capture to ERP sync in one flow.',
      description: 'vSuite ProcessFlow eliminates bottlenecks, reduces operational costs, and accelerates your document turnaround times.',
      steps: [
        { title: 'Capture', icon: 'bi-camera', description: 'Automatically retrieve documents from emails, portals, and integrated systems without manual intervention.' },
        { title: 'Extract', icon: 'bi-cpu', description: 'Use AI-powered OCR to extract key data points from Bills of Lading, invoices, and receipts.' },
        { title: 'Sync', icon: 'bi-arrow-left-right', description: 'Push validated data directly into your ERP, accounting, and payment systems in real time.' }
      ]
    },
    aiFeatures: {
      title: 'Why Choose vSuite ProcessFlow?',
      description: 'Leverage state-of-the-art intelligent processing for 100% reconciliation accuracy.',
      features: [
        { title: 'Eliminates manual BL & invoice processing', icon: 'bi-robot', description: 'AI-powered automation handles document processing end-to-end without human intervention.' },
        { title: 'Intelligent OCR extracts data instantly', icon: 'bi-eye', description: '99% recognition accuracy for structured and semi-structured documents across multiple formats.' },
        { title: 'Integrates with any ERP or payment system', icon: 'bi-plug', description: 'Pre-built connectors and APIs for seamless integration with your existing business systems.' },
        { title: 'Scales with your logistics volume', icon: 'bi-graph-up', description: 'Handle thousands of documents daily without performance degradation or accuracy loss.' }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge-fill',
      title: 'Ready to automate your document workflows?',
      description: 'Join logistics teams using vSuite ProcessFlow to eliminate manual data entry.',
      buttonText: 'Get Started Today',
      buttonLink: ''
    }
  };
}
