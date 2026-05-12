import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-workflows',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './workflows.html',
  styleUrl: './workflows.scss'
})
export class WorkflowsComponent {
  capabilities = [
    {
      title: 'Visual Workflow Builder',
      description: 'Design multi-step processes with a drag-and-drop visual editor — no coding required.',
      icon: 'bi-diagram-3'
    },
    {
      title: 'Approval Automation',
      description: 'Route tasks through structured approval chains with conditional logic and escalation rules.',
      icon: 'bi-person-check'
    },
    {
      title: 'Notifications & Alerts',
      description: 'Keep teams informed with real-time notifications via email, SMS, or in-app alerts.',
      icon: 'bi-bell'
    },
    {
      title: 'Conditional Logic',
      description: 'Build smart workflows with if/else branching, loop controls, and dynamic routing rules.',
      icon: 'bi-signpost-split'
    },
    {
      title: 'Cross-System Triggers',
      description: 'Launch workflows automatically from CRM, ERP, or any connected platform via webhooks or APIs.',
      icon: 'bi-plug'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Monitor workflow performance, bottlenecks, and SLA compliance through rich dashboards.',
      icon: 'bi-bar-chart-line'
    }
  ];

  whyChoose = [
    'No-code visual builder — anyone can design',
    'Reduces process cycle times by up to 80%',
    'Connects to any system via APIs or webhooks',
    'Built-in version control and audit trails',
    'Scales from simple approvals to enterprise flows',
    'Ready-made templates for HR, finance & ops'
  ];

  businessImpact = [
    { label: 'Cycle Time Reduction',      value: '80%',  icon: 'bi-clock-history'  },
    { label: 'Process Visibility',         value: '100%', icon: 'bi-eye'            },
    { label: 'Manual Steps Eliminated',   value: '70%',  icon: 'bi-check2-all'     },
    { label: 'Faster Approval Cycles',    value: '5×',   icon: 'bi-diagram-3'      }
  ];
}
