import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-ai-consulting',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class AiConsultingComponent {
  pageData: ProductPageData = {
    themeColor: '#be185d',
    hero: {
      badgeIcon: 'bi-lightbulb me-2',
      badgeText: 'AI Consulting',
      title: 'Turn AI Potential Into Business Reality.',
      description: 'Strategic, vendor-agnostic AI guidance — from readiness assessment and use-case discovery to roadmap planning and proof-of-concept delivery.',
      imageSrc: 'assets/img/AI-Consulting-Services.jpg',
      imageAlt: 'AI Consulting Dashboard',
      imageCaptionIcon: 'bi-map',
      imageCaptionText: 'Clear AI Roadmap',
      features: [{"icon":"bi-ui-checks","text":"Vendor-Agnostic"},{"icon":"bi-graph-up-arrow","text":"ROI-Focused"},{"icon":"bi-people","text":"Expert-Led"}],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [{"label":"Faster AI Time-to-Value","value":"3×","icon":"bi-lightning-charge"},{"label":"PoC Success Rate","value":"92%","icon":"bi-rocket"},{"label":"Cost Savings Identified","value":"40%","icon":"bi-piggy-bank"},{"label":"Avg. ROI Timeline","value":"6 Mo","icon":"bi-clock-history"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'A structured consulting approach that takes you from AI ambiguity to a clear, actionable, high-ROI implementation plan.',
      groups: [
        {
          category: 'Core Capabilities',
          icon: 'bi-stars',
          items: ["AI Readiness Assessment: Evaluate your data maturity, infrastructure, and organisational readiness before committing to AI investment.","Use Case Discovery: Identify high-impact AI opportunities across your operations, finance, HR, and customer-facing functions.","AI Roadmap Planning: Define a prioritised, phased AI strategy with clear milestones, ROI targets, and risk mitigation plans.","Vendor & Technology Selection: Vendor-agnostic guidance to select the right models, platforms, and tools for your specific context.","Proof of Concept (PoC): Rapidly prototype and validate AI solutions before full-scale investment — de-risk every decision.","Change Management & Training: Prepare your teams for AI adoption with targeted upskilling, playbooks, and governance frameworks."]
        }
      ]
    },
    workflow: {
      eyebrow: 'Strategy before technology, always.',
      title: 'Why Our AI Consulting?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [{"title":"Advantage","icon":"bi-check-circle","description":"Vendor-agnostic — we recommend what is right for you"},{"title":"Advantage","icon":"bi-check-circle","description":"Business-first approach, not technology-first"},{"title":"Advantage","icon":"bi-check-circle","description":"Proven frameworks from 50+ AI engagements"},{"title":"Advantage","icon":"bi-check-circle","description":"Risk-aware planning with clear exit criteria"},{"title":"Advantage","icon":"bi-check-circle","description":"Accelerate time-to-value with proven methodologies"},{"title":"Advantage","icon":"bi-check-circle","description":"Ongoing advisory beyond the initial engagement"}]
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
