import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss'
})
export class WhyChooseUsComponent {
  reasons = [
    {
      icon: 'bi-rocket-takeoff',
      title: 'Outcome-Driven Product Engineering',
      description: 'At Vishva Technologies, we don’t just build software—we build business solutions that deliver measurable results.',
      highlights: [
        'End-to-end product development (idea → design → development → deployment)',
        'Web, mobile, and enterprise applications',
        'Scalable and secure architectures'
      ],
      promise: 'You get a product that works in the real world, not just on paper.'
    },
    {
      icon: 'bi-gear-wide-connected',
      title: 'Intelligent Automation (RPA)',
      description: 'Manual processes slow businesses down. We automate them.',
      highlights: [
        'Repetitive business workflows',
        'Data entry and processing',
        'Report generation',
        'System integrations'
      ],
      benefits: ['Saves time', 'Reduces operational cost', 'Improves accuracy'],
      promise: 'Your team focuses on value, not repetitive work.'
    },
    {
      icon: 'bi-robot',
      title: 'Agentic AI Capabilities',
      description: 'We bring next-gen AI-powered systems that go beyond automation.',
      highlights: [
        'Analyze large data sets',
        'Make decisions based on rules and learning',
        'Continuously improve performance'
      ],
      useCases: ['Smart assistants', 'Predictive analytics', 'Intelligent workflows'],
      promise: 'Your business becomes smarter and self-evolving.'
    },
    {
      icon: 'bi-tools',
      title: 'Customized Solutions',
      description: 'No two businesses are the same—so why use generic software?',
      highlights: [
        'Tailor-made solutions',
        'Industry-specific customization',
        'Flexible and modular systems'
      ],
      promise: 'Everything is built around your exact needs.'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Speed + Quality Delivery',
      description: 'We follow modern development practices for faster time-to-market.',
      highlights: [
        'Agile methodology',
        'Continuous integration & deployment',
        'Automated testing'
      ],
      promise: 'Reliable and high-quality systems.'
    },
    {
      icon: 'bi-hand-thumbs-up',
      title: 'Long-Term Technology Partnership',
      description: 'We don’t just deliver and disappear. We grow as you grow.',
      highlights: [
        'Understand your long-term vision',
        'Provide ongoing support',
        'Continuously optimize your systems'
      ]
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Scalable & Future-Ready Solutions',
      description: 'Your business will evolve—your software should too.',
      highlights: [
        'Easy scalability',
        'Cloud-ready architecture',
        'Future technology integration'
      ]
    },
    {
      icon: 'bi-lightbulb',
      title: 'Innovation-First Culture',
      description: 'We actively encourage new ideas and customer-centric innovation.',
      highlights: [
        'New ideas',
        'Continuous improvement',
        'Customer-centric innovation'
      ],
      promise: 'We don’t just follow trends—we help create them.'
    }
  ];
}
