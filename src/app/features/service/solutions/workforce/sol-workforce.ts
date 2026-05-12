import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-sol-workforce',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './sol-workforce.html',
  styleUrl: './sol-workforce.scss'
})
export class SolWorkforceComponent {
  capabilities = [
    { icon: 'bi-cash-coin',        title: 'Payroll Processing',      description: 'Run accurate, compliant payroll in minutes with automated deductions, TDS, and payslip distribution.' },
    { icon: 'bi-calendar2-check',  title: 'Leave Management',        description: 'Configurable leave policies with self-service applications, manager approvals, and real-time balances.' },
    { icon: 'bi-star-half',        title: 'Performance Reviews',     description: 'Set OKRs, conduct 360° feedback cycles, and track goals with continuous performance insights.' },
    { icon: 'bi-person-lines-fill',title: 'Recruitment Pipeline',    description: 'Source, screen, and onboard talent faster with structured workflows and offer letter automation.' },
    { icon: 'bi-shield-lock',      title: 'Compliance Tracking',     description: 'Stay audit-ready with automated statutory compliance, PF, ESI, and labour law monitoring.' },
    { icon: 'bi-phone',            title: 'Employee Self-Service',   description: 'Empower employees to manage their profile, payslips, leaves, and claims from any device.' }
  ];

  whyChoose = [
    'Statutory compliance — PF, ESI, TDS, PT',
    'Automated payslip generation and distribution',
    'Configurable leave and shift policies',
    'Real-time org chart and headcount analytics',
    'Complete audit trail for every HR action',
    'Mobile-first employee self-service portal'
  ];

  businessImpact = [
    { icon: 'bi-person-check',   value: '50%',     label: 'Faster Hiring Cycles' },
    { icon: 'bi-shield-check',   value: '100%',    label: 'Statutory Compliance' },
    { icon: 'bi-cpu',            value: '80%',     label: 'HR Tasks Automated' },
    { icon: 'bi-heart',          value: '3×',      label: 'Employee Retention Rate' }
  ];
}
