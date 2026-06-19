import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-rpa',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class RpaComponent {
  pageData: ProductPageData = {
    themeColor: '#0D9488',
    accentGold: '#B98423',
    pageClass: 'rpa-theme',
    hero: {
      badgeIcon: 'bi-gear-wide-connected',
      badgeText: 'Robotic Process Automation',
      title: 'Automate Repetitive Tasks.<br>Free Your Workforce.',
      description: 'vSuite RPA deploys intelligent software bots that handle rule-based, high-volume tasks — so your teams can focus on strategic work that truly drives business value.',
      imageSrc: 'assets/img/vs images/RPA_image.png',
      imageAlt: 'vSuite Process Flow — RPA Platform',
      imageCaptionIcon: 'bi-gear-wide-connected',
      imageCaptionText: 'End-to-End Process Automation',
      features: [
        { icon: 'bi-robot',         text: 'Unattended Bots'     },
        { icon: 'bi-plug',          text: 'System Integration'  },
        { icon: 'bi-file-earmark-text', text: 'Smart Extraction' },
        { icon: 'bi-bar-chart-line', text: 'Bot Analytics'      }
      ],
      primaryButton:   { text: 'Request a Demo',   link: '', icon: 'bi-calendar-check' },
      secondaryButton: { text: 'See How It Works', link: '',     icon: 'bi-play-circle'    },
      stats: [
        { label: 'Process Speed Increase', value: '10×'   },
        { label: 'Operational Cost Cut',   value: '60%'   },
        { label: 'Accuracy Rate',          value: '99.9%' },
        { label: 'Bot Availability',       value: '24/7'  }
      ]
    },
    keyFeatures: {
      title: 'End-to-End RPA Capabilities',
      description: 'A complete robotic automation platform built to eliminate manual effort and drive operational excellence across every business function.',
      groups: [
        {
          category: 'Process Automation',
          icon: 'bi-robot',
          description: 'Automate data entry, form filling, report generation, and rule-based workflows with zero manual effort — running continuously, 24/7.'
        },
        {
          category: 'Seamless System Integration',
          icon: 'bi-plug',
          description: 'Connect legacy ERP, CRM, and modern cloud platforms without APIs. Bots operate across any application exactly as a human would.'
        },
        {
          category: 'Intelligent Data Extraction',
          icon: 'bi-file-earmark-text',
          description: 'Extract, transform, and load structured data from documents, portals, and emails with high precision using smart parsing engines.'
        },
        {
          category: 'Bot Monitoring & Analytics',
          icon: 'bi-bar-chart-line',
          description: 'Real-time dashboards track bot performance, execution logs, and SLA compliance — with full audit trails for governance and reporting.'
        }
      ]
    },
    workflow: {
      eyebrow: 'From process mapping to live automation',
      title: 'How RPA Deployment Works',
      description: 'A structured three-phase approach that maps, builds, and deploys automation bots with minimal disruption to your existing operations.',
      steps: [
        {
          title: 'Discover',
          icon: 'bi-search',
          description: 'Analyse existing workflows to identify the highest-ROI automation candidates and map every step for bot replication.'
        },
        {
          title: 'Build',
          icon: 'bi-gear-wide-connected',
          description: 'Configure and test software bots using low-code tooling — integrated directly with your existing systems and business rules.'
        },
        {
          title: 'Deploy',
          icon: 'bi-rocket-takeoff',
          description: 'Go live in days, not months. Bots run unattended around the clock, self-heal on exceptions, and scale on demand.'
        }
      ]
    },
    aiFeatures: {
      title: 'Why Enterprises Choose vSuite RPA',
      description: 'Built for high-volume, mission-critical operations where accuracy, speed, and compliance are non-negotiable.',
      features: [
        {
          title: '10× faster than manual processing',
          icon: 'bi-lightning-charge',
          description: 'Software bots execute repetitive tasks at machine speed — eliminating bottlenecks and dramatically reducing processing time.'
        },
        {
          title: 'Works with your existing systems',
          icon: 'bi-plug',
          description: 'No expensive system overhauls needed. Bots integrate with legacy ERP, CRM, databases, and web portals out of the box.'
        },
        {
          title: 'Full audit trail for compliance',
          icon: 'bi-shield-check',
          description: 'Every bot action is logged and timestamped — providing complete traceability for internal audits and regulatory compliance.'
        },
        {
          title: 'Scales from single process to enterprise-wide',
          icon: 'bi-building',
          description: 'Start automating one process and expand across finance, HR, operations, and supply chain — on the same unified platform.'
        }
      ]
    },
    cta: {
      icon: 'bi-gear-wide-connected',
      title: 'Ready to Automate Your Operations?',
      description: 'Join enterprises using vSuite RPA to eliminate manual work, reduce errors, and achieve 24/7 operational efficiency at scale.',
      buttonText: 'Request a Demo',
      buttonLink: ''
    }
  };
}
