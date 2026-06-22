import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-ai-automation',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class AiAutomationComponent {
  pageData: ProductPageData = {
    themeColor: '#0EA5E9',
    accentGold: '#B98423',
    pageClass: 'ai-automation-theme',
    hero: {
      badgeIcon: 'bi-cpu',
      badgeText: 'AI + RPA Automation',
      title: 'Beyond Rule-Based Bots.<br>Truly Intelligent Automation.',
      description: 'Combine AI reasoning with RPA execution speed to automate complex, unstructured, and judgment-intensive processes that traditional rule-based systems cannot handle.',
      imageSrc: 'assets/img/ai-rpa-business-automation-2025.webp',
      imageAlt: 'Vishva Technologies AI Automation',
      imageCaptionIcon: 'bi-stars',
      imageCaptionText: 'Enterprise-Grade AI Automation Platform',
      features: [
        { icon: 'bi-robot',            text: 'AI + RPA Hybrid'       },
        { icon: 'bi-file-earmark-text', text: 'Document Intelligence' },
        { icon: 'bi-cpu',              text: 'Self-Learning Models'  },
        { icon: 'bi-person-check',     text: 'Human-in-the-Loop'    }
      ],
      primaryButton:   { text: 'Request a Demo',   link: '', icon: 'bi-calendar-check' },
      secondaryButton: { text: 'See How It Works', link: '',     icon: 'bi-play-circle'    },
      stats: [
        { label: 'Process Automation Rate', value: '85%'   },
        { label: 'Human Effort Reduced',    value: '80%'   },
        { label: 'Decision Accuracy',       value: '97%'   },
        { label: 'Cost Per Transaction',    value: '65% ↓' }
      ]
    },
    keyFeatures: {
      title: 'Enterprise AI Automation Capabilities',
      description: 'A unified platform that blends AI intelligence with RPA precision — purpose-built for complex, high-volume enterprise workflows.',
      groups: [
        {
          category: 'Intelligent Document Processing',
          icon: 'bi-file-earmark-text',
          description: 'Extract, classify, and validate data from invoices, contracts, forms, and emails using AI-native parsers — with zero manual effort.'
        },
        {
          category: 'Decision Automation',
          icon: 'bi-diagram-3',
          description: 'Replace rigid rule trees with adaptive AI models that learn from historical data and make accurate, auditable decisions at scale.'
        },
        {
          category: 'AI + RPA Hybrid Execution',
          icon: 'bi-robot',
          description: 'Combine the speed and precision of RPA bots with AI reasoning to automate end-to-end processes across legacy and modern systems.'
        },
        {
          category: 'Self-Healing Bots',
          icon: 'bi-arrow-repeat',
          description: 'AI-powered bots that detect UI changes, recover from errors autonomously, and maintain high uptime without constant human oversight.'
        }
      ]
    },
    workflow: {
      eyebrow: 'From discovery to optimisation',
      title: 'How AI Automation Works',
      description: 'A structured three-phase approach that maps, deploys, and continuously improves automation across your entire organisation.',
      steps: [
        {
          title: 'Discover',
          icon: 'bi-search',
          description: 'Use process mining and task analysis to identify the highest-value automation opportunities across your business operations.'
        },
        {
          title: 'Automate',
          icon: 'bi-robot',
          description: 'Deploy AI agents and RPA bots that work together to handle documents, decisions, and workflows — end to end.'
        },
        {
          title: 'Optimise',
          icon: 'bi-graph-up-arrow',
          description: 'Continuous learning loops improve accuracy and throughput over time, delivering compounding ROI with every iteration.'
        }
      ]
    },
    aiFeatures: {
      title: 'Why Enterprises Choose Vishva AI Automation',
      description: 'Purpose-built for organisations that need reliable, scalable, and explainable automation beyond what traditional RPA can deliver.',
      features: [
        {
          title: 'Handles unstructured data at scale',
          icon: 'bi-layers',
          description: 'Process PDFs, emails, scanned images, and free text that traditional automation cannot — with high accuracy and no manual pre-processing.'
        },
        {
          title: 'Explainable AI with full audit trails',
          icon: 'bi-shield-check',
          description: 'Every automated decision is logged, traceable, and explainable — ensuring compliance and trust across regulated industries.'
        },
        {
          title: 'Rapid deployment across departments',
          icon: 'bi-rocket-takeoff',
          description: 'Pre-built connectors, low-code configuration, and reusable automation components cut deployment time from months to weeks.'
        },
        {
          title: 'Scales from pilot to enterprise-wide',
          icon: 'bi-building',
          description: 'Start with a single process and expand across finance, HR, operations, and supply chain — on the same unified platform.'
        }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge-fill',
      title: 'Ready to Automate Smarter?',
      description: 'Join leading enterprises using Vishva AI Automation to eliminate manual work, reduce errors, and unlock operational efficiency at scale.',
      buttonText: 'Request a Demo',
      buttonLink: ''
    }
  };
}
