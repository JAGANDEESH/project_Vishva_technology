import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class IntegrationsComponent {
  pageData: ProductPageData = {
    themeColor: '#d97706',
    hero: {
      badgeIcon: 'bi-plug me-2',
      badgeText: 'System Integrations',
      title: 'Connect Every System. Unify Your Data Flow.',
      description: 'Connect your business applications seamlessly — from ERP and CRM to specialised platforms — eliminating data silos and powering a fully unified operation.',
      imageSrc: 'assets/img/System-Integration.png',
      imageAlt: 'System Integrations Dashboard',
      imageCaptionIcon: 'bi-plug-fill',
      imageCaptionText: '100+ Ready Connectors',
      features: [],
      primaryButton: { text: 'Get Started Free', link: '', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '', icon: 'bi-play-circle' },
      stats: [{"label":"Integration Time Saved","value":"90%","icon":"bi-clock-history"},{"label":"Data Sync Accuracy","value":"100%","icon":"bi-check-all"},{"label":"Systems Connected","value":"100+","icon":"bi-plug"},{"label":"Faster Deployment","value":"3×","icon":"bi-lightning-charge"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'Everything you need to connect, transform, and orchestrate data across your entire technology stack.',
      groups: [
        {
          category: 'Connectivity',
          icon: 'bi-plug',
          items: [
            "API Gateway: Connect any application through REST, GraphQL, or SOAP APIs with centralised management and security.",
            "Pre-Built Connectors: 100+ ready-made connectors for popular platforms like Salesforce, SAP, QuickBooks, and more."
          ]
        },
        {
          category: 'Orchestration & Mapping',
          icon: 'bi-arrow-left-right',
          items: [
            "Data Transformation: Map, transform, and enrich data between systems with visual field mapping and custom logic.",
            "Event-Driven Triggers: Trigger integrations in real time based on system events, webhooks, or scheduled intervals."
          ]
        },
        {
          category: 'Resilience & Visibility',
          icon: 'bi-shield-check',
          items: [
            "Error Handling & Retry: Built-in fault tolerance with automatic retries, error notifications, and fallback routes.",
            "Monitoring & Logs: Full visibility into integration health, data flow, and transaction history with real-time alerts."
          ]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built for connected, data-driven businesses.',
      title: 'Why Choose Integrations?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [
        { title: "Ready Connectors", icon: "bi-check-circle", description: "100+ pre-built connectors ready to deploy" },
        { title: "Visual Mapping", icon: "bi-check-circle", description: "No-code mapping for non-technical teams" },
        { title: "Hybrid Modes", icon: "bi-check-circle", description: "Real-time and batch integration modes" },
        { title: "Secure Channels", icon: "bi-check-circle", description: "Enterprise-grade security and encryption" },
        { title: "High Scale", icon: "bi-check-circle", description: "Scales from 2 systems to 200+" },
        { title: "Dedicated Support", icon: "bi-check-circle", description: "Dedicated integration support team" }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge',
      title: 'Ready to Get Started?',
      description: '',
      buttonText: 'Start Free Trial',
      buttonLink: ''
    }
  };
}
