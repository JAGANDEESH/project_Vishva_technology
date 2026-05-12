import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-ai-automation',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './ai-automation.html',
  styleUrl: './ai-automation.scss'
})
export class AiAutomationComponent {
  capabilities = [
    {
      title: 'Intelligent Document Processing',
      description: 'Extract, classify, and validate data from unstructured documents — invoices, contracts, forms, and more.',
      icon: 'bi-file-earmark-text'
    },
    {
      title: 'Unstructured Data Handling',
      description: 'Process emails, PDFs, images, and free text that traditional RPA cannot handle with AI-native parsers.',
      icon: 'bi-layers'
    },
    {
      title: 'Decision Automation',
      description: 'Replace rule-based decision trees with AI models that learn from data and adapt to changing conditions.',
      icon: 'bi-diagram-3'
    },
    {
      title: 'Human-in-the-Loop',
      description: 'Seamlessly escalate edge cases to human reviewers while keeping automation rates maximally high.',
      icon: 'bi-person-check'
    },
    {
      title: 'Self-Healing Automation',
      description: 'AI-powered bots that detect and recover from UI changes, errors, and exceptions autonomously.',
      icon: 'bi-arrow-repeat'
    },
    {
      title: 'AI + RPA Hybrid',
      description: 'Combine the precision of RPA with the intelligence of AI for end-to-end process automation.',
      icon: 'bi-robot'
    }
  ];

  whyChoose = [
    'Handles unstructured data traditional RPA cannot',
    'Combines AI reasoning with RPA execution speed',
    'Continuously learns and improves over time',
    'Reduces human effort by up to 80%',
    'Audit trails and explainable AI decisions',
    'Rapid deployment across departments'
  ];

  businessImpact = [
    { label: 'Process Automation Rate', value: '85%',  icon: 'bi-robot'            },
    { label: 'Human Effort Reduced',    value: '80%',  icon: 'bi-person-check'     },
    { label: 'Decision Accuracy',       value: '97%',  icon: 'bi-patch-check'      },
    { label: 'Cost Per Transaction',    value: '65% ↓', icon: 'bi-piggy-bank'      }
  ];
}
