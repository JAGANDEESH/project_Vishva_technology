import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-llm-development',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './llm-development.html',
  styleUrl: './llm-development.scss'
})
export class LlmDevelopmentComponent {
  capabilities = [
    {
      title: 'Custom Model Training',
      description: 'Train domain-specific LLMs on your proprietary data for unmatched accuracy and contextual relevance.',
      icon: 'bi-cpu'
    },
    {
      title: 'Fine-Tuning & Adaptation',
      description: 'Fine-tune foundation models like GPT, LLaMA, or Mistral to align precisely with your business domain.',
      icon: 'bi-sliders'
    },
    {
      title: 'Prompt Engineering',
      description: 'Design, test, and optimise prompts for consistent, high-quality outputs across all use cases.',
      icon: 'bi-chat-dots'
    },
    {
      title: 'LLM API Integration',
      description: 'Embed powerful language capabilities into your applications via clean, scalable API interfaces.',
      icon: 'bi-plug'
    },
    {
      title: 'Model Evaluation',
      description: 'Benchmark model performance using rigorous evaluation frameworks, human feedback, and automated metrics.',
      icon: 'bi-bar-chart-line'
    },
    {
      title: 'Deployment & MLOps',
      description: 'Deploy models to production with full CI/CD pipelines, monitoring, and lifecycle management.',
      icon: 'bi-cloud-upload'
    }
  ];

  whyChoose = [
    'Models trained on your private, proprietary data',
    'Significantly lower cost vs. GPT-4 API at scale',
    'Full data privacy — no third-party data sharing',
    'Rapid iteration from prototype to production',
    'Ongoing model retraining and performance tuning',
    'Expert team with proven LLM deployments'
  ];

  businessImpact = [
    { label: 'Response Accuracy',    value: '95%+', icon: 'bi-patch-check'      },
    { label: 'Cost vs. GPT-4 API',   value: '60% ↓', icon: 'bi-piggy-bank'     },
    { label: 'Avg. Inference Speed', value: '<1s',  icon: 'bi-lightning-charge' },
    { label: 'Time to Deploy',       value: '4 Wks', icon: 'bi-clock-history'   }
  ];
}
