import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-rpa',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './rpa.html',
  styleUrl: './rpa.scss'
})
export class RpaComponent {
  capabilities = [
    {
      title: 'Process Automation',
      description: 'Automate rule-based, repetitive tasks like data entry, form filling, and report generation with zero manual effort.',
      icon: 'bi-robot'
    },
    {
      title: 'System Integration',
      description: 'Connect disparate systems without APIs — bots bridge legacy and modern platforms seamlessly.',
      icon: 'bi-plug'
    },
    {
      title: 'Smart Data Extraction',
      description: 'Extract, transform, and load data from any source with precision using intelligent document parsing.',
      icon: 'bi-file-earmark-text'
    },
    {
      title: 'AI-Assisted Bots',
      description: 'Leverage intelligent bots that handle semi-structured data, learn patterns, and self-heal on UI changes.',
      icon: 'bi-cpu'
    },
    {
      title: 'Bot Monitoring & Analytics',
      description: 'Real-time bot performance dashboards with full audit logs for compliance and traceability.',
      icon: 'bi-bar-chart-line'
    },
    {
      title: 'Zero-Error Processing',
      description: 'Achieve near-perfect accuracy on high-volume tasks with consistent, 24/7 unattended bot execution.',
      icon: 'bi-patch-check'
    }
  ];

  whyChoose = [
    '10× faster than manual processing',
    'Works with your existing systems — no rework',
    '24/7 unattended bot execution',
    'Full audit trail for compliance',
    'Rapid deployment — live in days, not months',
    'AI-enhanced self-healing automation'
  ];

  businessImpact = [
    { label: 'Process Speed Increase', value: '10×',   icon: 'bi-lightning-charge' },
    { label: 'Operational Cost Cut',   value: '60%',   icon: 'bi-piggy-bank'       },
    { label: 'Accuracy Rate',          value: '99.9%', icon: 'bi-patch-check'      },
    { label: 'Bot Availability',       value: '24/7',  icon: 'bi-clock'            }
  ];
}
