import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './payroll.html',
  styleUrl: './payroll.scss'
})
export class PayrollComponent {
  capabilities = [
    {
      title: 'Payroll Automation',
      description: 'Automatic salary calculations with custom structures and instant payslip generation.',
      icon: 'bi-cpu'
    },
    {
      title: 'Compliance Management',
      description: 'Built-in support for PF, ESI, Professional Tax, and TDS with statutory reports and filings.',
      icon: 'bi-shield-check'
    },
    {
      title: 'Employee Management',
      description: 'Track attendance, leave, reimbursements, and claims through a secure self-service portal.',
      icon: 'bi-people'
    },
    {
      title: 'Reports & Analytics',
      description: 'Gain insights with payroll summaries, cost-to-company analysis, and department-wise reports.',
      icon: 'bi-bar-chart'
    }
  ];

  whyChoose = [
    'Saves time through end-to-end automation',
    'Reduces manual errors and calculation risks',
    'Ensures 100% compliance with Indian regulations',
    'Integrated with the broader vSuite ecosystem',
    'Scalable for growing organizations'
  ];
}
