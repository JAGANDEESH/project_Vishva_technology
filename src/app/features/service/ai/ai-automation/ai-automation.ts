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
    themeColor: '#9f1239',
    hero: {
      badgeIcon: 'bi-robot me-2',
      badgeText: 'AI Automation',
      title: 'Beyond Rule-Based Bots. Truly Intelligent Automation.',
      description: 'Combine AI reasoning with RPA execution speed to automate complex, unstructured, and judgment-intensive processes that traditional automation cannot handle.',
      imageSrc: 'assets/img/vs%20suitable%20image/shared%20image%20(4).jpg',
      imageAlt: 'AI Automation Dashboard',
      imageCaptionIcon: 'bi-robot',
      imageCaptionText: 'AI-Powered Automation',
      features: [{"icon":"bi-robot","text":"AI + RPA Hybrid"},{"icon":"bi-layers","text":"Unstructured Data"},{"icon":"bi-cpu","text":"Self-Learning"}],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [{"label":"Process Automation Rate","value":"85%","icon":"bi-robot"},{"label":"Human Effort Reduced","value":"80%","icon":"bi-person-check"},{"label":"Decision Accuracy","value":"97%","icon":"bi-patch-check"},{"label":"Cost Per Transaction","value":"65% ↓","icon":"bi-piggy-bank"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'AI-native automation that handles the complex, ambiguous tasks that rule-based systems leave behind.',
      groups: [
        {
          category: 'Core Capabilities',
          icon: 'bi-stars',
          items: ["Intelligent Document Processing: Extract, classify, and validate data from unstructured documents — invoices, contracts, forms, and more.","Unstructured Data Handling: Process emails, PDFs, images, and free text that traditional RPA cannot handle with AI-native parsers.","Decision Automation: Replace rule-based decision trees with AI models that learn from data and adapt to changing conditions.","Human-in-the-Loop: Seamlessly escalate edge cases to human reviewers while keeping automation rates maximally high.","Self-Healing Automation: AI-powered bots that detect and recover from UI changes, errors, and exceptions autonomously.","AI + RPA Hybrid: Combine the precision of RPA with the intelligence of AI for end-to-end process automation."]
        }
      ]
    },
    workflow: {
      eyebrow: 'Intelligent where RPA is brittle.',
      title: 'Why AI Automation?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [{"title":"Advantage","icon":"bi-check-circle","description":"Handles unstructured data traditional RPA cannot"},{"title":"Advantage","icon":"bi-check-circle","description":"Combines AI reasoning with RPA execution speed"},{"title":"Advantage","icon":"bi-check-circle","description":"Continuously learns and improves over time"},{"title":"Advantage","icon":"bi-check-circle","description":"Reduces human effort by up to 80%"},{"title":"Advantage","icon":"bi-check-circle","description":"Audit trails and explainable AI decisions"},{"title":"Advantage","icon":"bi-check-circle","description":"Rapid deployment across departments"}]
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
