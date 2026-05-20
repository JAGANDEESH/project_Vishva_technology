import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-sol-workforce',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class SolWorkforceComponent {
  pageData: ProductPageData = {
    themeColor: '#8b5cf6',
    hero: {
      badgeIcon: 'bi-people ms-1 me-2',
      badgeText: 'Workforce Solutions',
      title: 'Hire. Engage. Retain Your Best.',
      description: 'From automated payroll and compliance tracking to performance reviews and employee self-service — one platform to manage your entire workforce with confidence.',
      imageSrc: 'assets/img/hero/workforce-hero.png',
      imageAlt: 'Workforce Solutions Dashboard',
      imageCaptionIcon: 'bi-people',
      imageCaptionText: 'Complete HR Platform',
      features: [{"icon":"bi-shield-check","text":"Statutory Compliant"},{"icon":"bi-phone","text":"Mobile-First ESS"},{"icon":"bi-cpu","text":"Auto-Payroll"}],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [{"icon":"bi-person-check","value":"50%","label":"Faster Hiring Cycles"},{"icon":"bi-shield-check","value":"100%","label":"Statutory Compliance"},{"icon":"bi-cpu","value":"80%","label":"HR Tasks Automated"},{"icon":"bi-heart","value":"3×","label":"Employee Retention Rate"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'End-to-end HR automation that keeps your team compliant, engaged, and productive — from first hire to final payslip.',
      groups: [
        {
          category: 'Core Capabilities',
          icon: 'bi-stars',
          items: ["Payroll Processing: Run accurate, compliant payroll in minutes with automated deductions, TDS, and payslip distribution.","Leave Management: Configurable leave policies with self-service applications, manager approvals, and real-time balances.","Performance Reviews: Set OKRs, conduct 360° feedback cycles, and track goals with continuous performance insights.","Recruitment Pipeline: Source, screen, and onboard talent faster with structured workflows and offer letter automation.","Compliance Tracking: Stay audit-ready with automated statutory compliance, PF, ESI, and labour law monitoring.","Employee Self-Service: Empower employees to manage their profile, payslips, leaves, and claims from any device."]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built for people. Designed for compliance.',
      title: 'Why Workforce Solutions?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [{"title":"Advantage","icon":"bi-check-circle","description":"Statutory compliance — PF, ESI, TDS, PT"},{"title":"Advantage","icon":"bi-check-circle","description":"Automated payslip generation and distribution"},{"title":"Advantage","icon":"bi-check-circle","description":"Configurable leave and shift policies"},{"title":"Advantage","icon":"bi-check-circle","description":"Real-time org chart and headcount analytics"},{"title":"Advantage","icon":"bi-check-circle","description":"Complete audit trail for every HR action"},{"title":"Advantage","icon":"bi-check-circle","description":"Mobile-first employee self-service portal"}]
    },
    cta: {
      icon: 'bi-lightning-charge',
      title: 'Ready to EmpowerYour Workforce?',
      description: 'Automate payroll, ensure compliance, and build a high-performance culture — all from one intuitive HR platform.',
      buttonText: 'Start Free Trial',
      buttonLink: '#appointment'
    }
  };
}
