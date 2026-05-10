import { Component } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './hr.html',
  styleUrl: './hr.scss'
})
export class HrComponent {
  capabilities = [
    {
      title: 'Employee Management',
      description: 'Centralized database with digital profiles and document management.',
      icon: 'bi-person-vcard'
    },
    {
      title: 'Attendance & Leave',
      description: 'Daily tracking, leave requests & approvals, and holiday calendars.',
      icon: 'bi-calendar-check'
    },
    {
      title: 'Recruitment & Onboarding',
      description: 'Candidate tracking, offer management, and structured onboarding workflows.',
      icon: 'bi-person-plus'
    },
    {
      title: 'Performance Management',
      description: 'Goal setting (OKRs/KPIs), performance reviews, and feedback systems.',
      icon: 'bi-award'
    }
  ];

  whyChoose = [
    'One platform for the complete employee lifecycle',
    'Improves HR efficiency and automation',
    'Enhances employee experience and engagement',
    'Scales seamlessly with your organization',
    'Integrated with payroll and finance systems'
  ];
}
