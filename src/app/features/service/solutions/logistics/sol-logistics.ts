import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-sol-logistics',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class SolLogisticsComponent {
  pageData: ProductPageData = {
    themeColor: '#0d9488',
    hero: {
      badgeIcon: 'bi-truck ms-1 me-2',
      badgeText: 'Logistics Solutions',
      title: 'Deliver On Time. Every Single Time.',
      description: 'From real-time shipment tracking to AI-driven route optimization and automated carrier management — one platform to move goods faster, cheaper, and smarter.',
      imageSrc: 'assets/img/vs%20suitable%20image/shared%20image%20(4).jpg',
      imageAlt: 'Logistics Solutions Dashboard',
      imageCaptionIcon: 'bi-truck',
      imageCaptionText: '100+ Carrier Integrations',
      features: [{"icon":"bi-broadcast","text":"Real-time Tracking"},{"icon":"bi-diagram-3","text":"Multi-Carrier"},{"icon":"bi-cpu","text":"AI-Optimized Routes"}],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [{"icon":"bi-piggy-bank","value":"40%","label":"Logistics Cost Reduction"},{"icon":"bi-clock-history","value":"98%","label":"On-Time Delivery Rate"},{"icon":"bi-truck-front","value":"100+","label":"Carrier Integrations"},{"icon":"bi-lightning-charge","value":"3×","label":"Throughput Increase"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'End-to-end logistics automation that cuts costs, prevents delays, and gives you full visibility across every shipment.',
      groups: [
        {
          category: 'Core Capabilities',
          icon: 'bi-stars',
          items: ["Shipment Tracking: Live end-to-end shipment visibility with real-time carrier updates and proactive delay alerts.","Carrier Management: Integrate with 100+ carriers, compare rates instantly, and auto-assign the best shipping option.","Document Automation: Auto-generate waybills, e-PODs, invoices, and customs documents with zero manual data entry.","Route Optimization: AI-driven routing that reduces delivery distance, fuel costs, and time-on-road by up to 35%.","Warehouse Operations: Optimize put-away, picking, and packing workflows with barcode scanning and slot management.","Returns Management: Streamline reverse logistics with automated return labels, inspection workflows, and refund triggers."]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built for speed. Designed for scale.',
      title: 'Why Logistics Solutions?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [{"title":"Advantage","icon":"bi-check-circle","description":"Real-time tracking across all carriers"},{"title":"Advantage","icon":"bi-check-circle","description":"Multi-carrier rate comparison and auto-select"},{"title":"Advantage","icon":"bi-check-circle","description":"Automated ePOD and proof of delivery"},{"title":"Advantage","icon":"bi-check-circle","description":"AI-driven route and load optimization"},{"title":"Advantage","icon":"bi-check-circle","description":"Dispute resolution and freight audit tools"},{"title":"Advantage","icon":"bi-check-circle","description":"API-first architecture for any ERP or WMS"}]
    },
    cta: {
      icon: 'bi-lightning-charge',
      title: 'Ready to StreamlineYour Logistics?',
      description: 'Cut delivery costs, eliminate delays, and gain full shipment visibility — powered by AI-driven automation that works around the clock.',
      buttonText: 'Start Free Trial',
      buttonLink: '#appointment'
    }
  };
}
