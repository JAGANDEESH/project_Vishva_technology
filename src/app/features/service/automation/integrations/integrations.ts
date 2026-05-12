import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './integrations.html',
  styleUrl: './integrations.scss'
})
export class IntegrationsComponent {
  capabilities = [
    {
      title: 'API Gateway',
      description: 'Connect any application through REST, GraphQL, or SOAP APIs with centralised management and security.',
      icon: 'bi-hdd-network'
    },
    {
      title: 'Pre-Built Connectors',
      description: '100+ ready-made connectors for popular platforms like Salesforce, SAP, QuickBooks, and more.',
      icon: 'bi-plug'
    },
    {
      title: 'Data Transformation',
      description: 'Map, transform, and enrich data between systems with visual field mapping and custom logic.',
      icon: 'bi-shuffle'
    },
    {
      title: 'Event-Driven Triggers',
      description: 'Trigger integrations in real time based on system events, webhooks, or scheduled intervals.',
      icon: 'bi-lightning-charge'
    },
    {
      title: 'Error Handling & Retry',
      description: 'Built-in fault tolerance with automatic retries, error notifications, and fallback routes.',
      icon: 'bi-arrow-repeat'
    },
    {
      title: 'Monitoring & Logs',
      description: 'Full visibility into integration health, data flow, and transaction history with real-time alerts.',
      icon: 'bi-activity'
    }
  ];

  whyChoose = [
    '100+ pre-built connectors ready to deploy',
    'No-code mapping for non-technical teams',
    'Real-time and batch integration modes',
    'Enterprise-grade security and encryption',
    'Scales from 2 systems to 200+',
    'Dedicated integration support team'
  ];

  businessImpact = [
    { label: 'Integration Time Saved',  value: '90%',  icon: 'bi-clock-history'    },
    { label: 'Data Sync Accuracy',      value: '100%', icon: 'bi-check-all'        },
    { label: 'Systems Connected',       value: '100+', icon: 'bi-plug'             },
    { label: 'Faster Deployment',       value: '3×',   icon: 'bi-lightning-charge' }
  ];
}
