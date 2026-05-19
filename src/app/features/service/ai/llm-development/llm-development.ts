import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-llm-development',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class LlmDevelopmentComponent {
  pageData: ProductPageData = {
    themeColor: '#1d4ed8',
    hero: {
      badgeIcon: 'bi-cpu me-2',
      badgeText: 'LLM Development',
      title: 'Build Language Models That Understand Your Business.',
      description: 'Custom Large Language Models trained on your data — delivering domain-specific intelligence, cost efficiency, and complete data privacy at scale.',
      imageSrc: 'assets/img/llm-development-services.jpg',
      imageAlt: 'LLM Development Dashboard',
      imageCaptionIcon: 'bi-cpu',
      imageCaptionText: 'Custom-Trained Models',
      features: [{"icon":"bi-shield-lock","text":"Privacy-First"},{"icon":"bi-patch-check","text":"Custom-Trained"},{"icon":"bi-cloud-check","text":"Production-Ready"}],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [{"label":"Response Accuracy","value":"95%+","icon":"bi-patch-check"},{"label":"Cost vs. GPT-4 API","value":"60% ↓","icon":"bi-piggy-bank"},{"label":"Avg. Inference Speed","value":"<1s","icon":"bi-lightning-charge"},{"label":"Time to Deploy","value":"4 Wks","icon":"bi-clock-history"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'From data preparation to production deployment — complete LLM engineering services tailored to your domain.',
      groups: [
        {
          category: 'Core Capabilities',
          icon: 'bi-stars',
          items: ["Custom Model Training: Train domain-specific LLMs on your proprietary data for unmatched accuracy and contextual relevance.","Fine-Tuning & Adaptation: Fine-tune foundation models like GPT, LLaMA, or Mistral to align precisely with your business domain.","Prompt Engineering: Design, test, and optimise prompts for consistent, high-quality outputs across all use cases.","LLM API Integration: Embed powerful language capabilities into your applications via clean, scalable API interfaces.","Model Evaluation: Benchmark model performance using rigorous evaluation frameworks, human feedback, and automated metrics.","Deployment & MLOps: Deploy models to production with full CI/CD pipelines, monitoring, and lifecycle management."]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built for domain-specific precision.',
      title: 'Why Custom LLMs?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [{"title":"Advantage","icon":"bi-check-circle","description":"Models trained on your private, proprietary data"},{"title":"Advantage","icon":"bi-check-circle","description":"Significantly lower cost vs. GPT-4 API at scale"},{"title":"Advantage","icon":"bi-check-circle","description":"Full data privacy — no third-party data sharing"},{"title":"Advantage","icon":"bi-check-circle","description":"Rapid iteration from prototype to production"},{"title":"Advantage","icon":"bi-check-circle","description":"Ongoing model retraining and performance tuning"},{"title":"Advantage","icon":"bi-check-circle","description":"Expert team with proven LLM deployments"}]
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
