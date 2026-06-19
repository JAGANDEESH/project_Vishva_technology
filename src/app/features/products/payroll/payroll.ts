import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class PayrollComponent {
  pageData: ProductPageData = {
    themeColor: '#5F5F5F',
    pageBgColor: '#f5f3f2',
    accentGold: '#B98423',
    pageClass: 'payroll-theme',
    hero: {
      badgeIcon: 'bi-cash-stack',
      badgeText: 'vSuite PayRoll Ecosystem',
      title: 'Simplify Payroll.<br>Empower Your Workforce.',
      description: 'vSuite PayRoll automates salary processing, ensures compliance, and streamlines employee payments — so you can manage your workforce with confidence and ease.',
      imageSrc: 'assets/img/vs%20suitable%20image/shared%20image%20(1).jpg',
      imageAlt: 'vSuite PayRoll platform',
      imageCaptionText: 'Automated payroll with full compliance',
      features: [
        { icon: 'bi-cpu', text: 'Auto Salary Calc' },
        { icon: 'bi-shield-check', text: 'PF & ESI Ready' },
        { icon: 'bi-people', text: 'Employee Portal' },
        { icon: 'bi-bar-chart', text: 'Reports & Analytics' }
      ],
      primaryButton: { text: 'Get Started Free', link: '', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'View Demo', link: '', icon: 'bi-play-circle' },
      stats: [
        { value: '60%', label: 'Time Saved on Payroll' },
        { value: '100%', label: 'Statutory Compliance' },
        { value: 'Zero', label: 'Payroll Errors' },
        { value: '1-Click', label: 'Faster Payslip Cycle' }
      ]
    },
    keyFeatures: {
      title: 'End-to-End Payroll',
      description: 'A smart, scalable solution designed for startups and enterprises alike.',
      groups: [
        { category: 'Payroll Automation', icon: 'bi-cpu', description: 'Automatic salary calculations with custom structures and instant payslip generation.' },
        { category: 'Compliance Management', icon: 'bi-shield-check', description: 'Built-in support for PF, ESI, Professional Tax, and TDS with statutory reports and filings.' },
        { category: 'Employee Management', icon: 'bi-people', description: 'Track attendance, leave, reimbursements, and claims through a secure self-service portal.' },
        { category: 'Reports & Analytics', icon: 'bi-bar-chart', description: 'Gain insights with payroll summaries, cost-to-company analysis, and department-wise reports.' }
      ]
    },
    workflow: {
      eyebrow: 'Built for payroll teams',
      title: 'From salary setup to payslip delivery in one workflow.',
      description: 'vSuite PayRoll helps teams automate salary processing, ensure regulatory compliance, and deliver payslips on time every month.',
      steps: [
        { title: 'Configure', icon: 'bi-sliders', description: 'Set up salary structures, deductions, tax rules, and compliance parameters for your organization.' },
        { title: 'Process', icon: 'bi-play-circle', description: 'Run payroll with one click — salaries, bonuses, and statutory deductions calculated automatically.' },
        { title: 'Distribute', icon: 'bi-envelope-check', description: 'Generate and deliver payslips, file statutory returns, and reconcile bank payments seamlessly.' }
      ]
    },
    aiFeatures: {
      title: 'Why Choose vSuite PayRoll?',
      description: 'Experience unparalleled efficiency and reliability with our specialized payroll automation tools.',
      features: [
        { title: 'Saves time through end-to-end automation', icon: 'bi-clock-history', description: 'Eliminate manual salary calculations and statutory filings with fully automated workflows.' },
        { title: 'Reduces manual errors and calculation risks', icon: 'bi-patch-check', description: 'Built-in validation and audit trails ensure every payroll run is accurate and compliant.' },
        { title: 'Ensures 100% compliance with Indian regulations', icon: 'bi-shield-check', description: 'Stay current with PF, ESI, PT, and TDS rules — automatically updated with every regulatory change.' },
        { title: 'Scalable for growing organizations', icon: 'bi-graph-up', description: 'Handle payroll for 10 or 10,000 employees with the same ease and reliability.' }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge-fill',
      title: 'Ready to automate your payroll?',
      description: 'Join organizations using vSuite PayRoll to process salaries faster and smarter.',
      buttonText: 'Get Started Today',
      buttonLink: ''
    }
  };
}
