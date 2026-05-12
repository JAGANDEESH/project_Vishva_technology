import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-ai-consulting',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './ai-consulting.html',
  styleUrl: './ai-consulting.scss'
})
export class AiConsultingComponent {
  capabilities = [
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate your data maturity, infrastructure, and organisational readiness before committing to AI investment.',
      icon: 'bi-clipboard-check'
    },
    {
      title: 'Use Case Discovery',
      description: 'Identify high-impact AI opportunities across your operations, finance, HR, and customer-facing functions.',
      icon: 'bi-lightbulb'
    },
    {
      title: 'AI Roadmap Planning',
      description: 'Define a prioritised, phased AI strategy with clear milestones, ROI targets, and risk mitigation plans.',
      icon: 'bi-map'
    },
    {
      title: 'Vendor & Technology Selection',
      description: 'Vendor-agnostic guidance to select the right models, platforms, and tools for your specific context.',
      icon: 'bi-ui-checks'
    },
    {
      title: 'Proof of Concept (PoC)',
      description: 'Rapidly prototype and validate AI solutions before full-scale investment — de-risk every decision.',
      icon: 'bi-rocket'
    },
    {
      title: 'Change Management & Training',
      description: 'Prepare your teams for AI adoption with targeted upskilling, playbooks, and governance frameworks.',
      icon: 'bi-people'
    }
  ];

  whyChoose = [
    'Vendor-agnostic — we recommend what is right for you',
    'Business-first approach, not technology-first',
    'Proven frameworks from 50+ AI engagements',
    'Risk-aware planning with clear exit criteria',
    'Accelerate time-to-value with proven methodologies',
    'Ongoing advisory beyond the initial engagement'
  ];

  businessImpact = [
    { label: 'Faster AI Time-to-Value', value: '3×',   icon: 'bi-lightning-charge' },
    { label: 'PoC Success Rate',        value: '92%',  icon: 'bi-rocket'           },
    { label: 'Cost Savings Identified', value: '40%',  icon: 'bi-piggy-bank'       },
    { label: 'Avg. ROI Timeline',       value: '6 Mo', icon: 'bi-clock-history'    }
  ];
}
