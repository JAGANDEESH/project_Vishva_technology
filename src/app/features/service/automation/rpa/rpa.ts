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
    themeColor: '#7c3aed',
    hero: {
      badgeIcon: 'bi-robot me-2',
      badgeText: 'Robotic Process Automation',
      title: 'Automate Repetitive Tasks. Free Your Workforce.',
      description: 'vSuite RPA deploys intelligent software bots that handle rule-based, high-volume tasks—so your teams can focus on work that truly matters.',
      imageSrc: 'assets/img/vs%20suitable%20image/shared%20image%20(4).jpg',
      imageAlt: 'RPA Automation Dashboard',
      imageCaptionIcon: 'bi-robot',
      imageCaptionText: 'Intelligent RPA Bots',
      features: [],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [{"label":"Process Speed Increase","value":"10×","icon":"bi-lightning-charge"},{"label":"Operational Cost Cut","value":"60%","icon":"bi-piggy-bank"},{"label":"Accuracy Rate","value":"99.9%","icon":"bi-patch-check"},{"label":"Bot Availability","value":"24/7","icon":"bi-clock"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'End-to-end RPA solutions designed to eliminate manual effort and drive operational excellence.',
      groups: [
        {
          category: 'Core Capabilities',
          icon: 'bi-stars',
          items: ["Process Automation: Automate rule-based, repetitive tasks like data entry, form filling, and report generation with zero manual effort.","System Integration: Connect disparate systems without APIs — bots bridge legacy and modern platforms seamlessly.","Smart Data Extraction: Extract, transform, and load data from any source with precision using intelligent document parsing.","AI-Assisted Bots: Leverage intelligent bots that handle semi-structured data, learn patterns, and self-heal on UI changes.","Bot Monitoring & Analytics: Real-time bot performance dashboards with full audit logs for compliance and traceability.","Zero-Error Processing: Achieve near-perfect accuracy on high-volume tasks with consistent, 24/7 unattended bot execution."]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built for efficiency-driven enterprises.',
      title: 'Why Choose RPA?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [{"title":"Advantage","icon":"bi-check-circle","description":"10× faster than manual processing"},{"title":"Advantage","icon":"bi-check-circle","description":"Works with your existing systems — no rework"},{"title":"Advantage","icon":"bi-check-circle","description":"24/7 unattended bot execution"},{"title":"Advantage","icon":"bi-check-circle","description":"Full audit trail for compliance"},{"title":"Advantage","icon":"bi-check-circle","description":"Rapid deployment — live in days, not months"},{"title":"Advantage","icon":"bi-check-circle","description":"AI-enhanced self-healing automation"}]
    },
    cta: {
      icon: 'bi-lightning-charge',
      title: 'Ready to Get Started?',
      description: '',
      buttonText: 'Start Free Trial',
      buttonLink: '#appointment'
    }
  };
}
