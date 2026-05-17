import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class HrComponent {
  pageData: ProductPageData = {
    themeColor: '#f43f5e',
    hero: {
      badgeIcon: 'bi-people',
      badgeText: 'vSuite HR Ecosystem',
      title: 'Empower Your Team.<br>Simplify HR Operations.',
      description: 'vSuite HR streamlines everything from onboarding to performance tracking, enabling you to build a culture of growth, efficiency, and continuous engagement.',
      imageSrc: 'assets/img/vs%20suitable%20image/shared image (2).jpg',
      imageAlt: 'vSuite HR platform',
      imageCaptionText: 'Complete employee lifecycle management',
      features: [
        { icon: 'bi-person-vcard', text: 'Employee Profiles' },
        { icon: 'bi-calendar-check', text: 'Attendance & Leave' },
        { icon: 'bi-person-plus', text: 'Recruitment' },
        { icon: 'bi-award', text: 'Performance Reviews' }
      ],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'View Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [
        { value: '50%', label: 'Faster Hiring' },
        { value: '98%', label: 'Employee Engagement' },
        { value: '70%', label: 'HR Process Automation' },
        { value: '3×', label: 'Onboarding Time Saved' }
      ]
    },
    keyFeatures: {
      title: 'End-to-End HR Management',
      description: 'From recruitment to offboarding, streamline every step of your HR journey.',
      groups: [
        { category: 'Employee Management', icon: 'bi-person-vcard', description: 'Centralized database with digital profiles and document management.' },
        { category: 'Attendance & Leave', icon: 'bi-calendar-check', description: 'Daily tracking, leave requests & approvals, and holiday calendars.' },
        { category: 'Recruitment & Onboarding', icon: 'bi-person-plus', description: 'Candidate tracking, offer management, and structured onboarding workflows.' },
        { category: 'Performance Management', icon: 'bi-award', description: 'Goal setting (OKRs/KPIs), performance reviews, and feedback systems.' }
      ]
    },
    workflow: {
      eyebrow: 'Built for people teams',
      title: 'From hire to retire — one seamless HR platform.',
      description: 'vSuite HR helps teams drive strategic value, enhance employee satisfaction, and drastically reduce administrative overhead.',
      steps: [
        { title: 'Recruit', icon: 'bi-person-plus', description: 'Manage job postings, track candidates, and streamline offer letters with an integrated ATS.' },
        { title: 'Onboard', icon: 'bi-clipboard-check', description: 'Automate document collection, assign onboarding tasks, and set up new hire profiles seamlessly.' },
        { title: 'Engage', icon: 'bi-emoji-smile', description: 'Run performance reviews, track OKRs, and maintain continuous feedback loops for growth.' }
      ]
    },
    aiFeatures: {
      title: 'Why Choose vSuite HR?',
      description: 'Equip your HR team with the tools they need to foster a thriving, productive workplace while maintaining seamless compliance.',
      features: [
        { title: 'One platform for the complete employee lifecycle', icon: 'bi-diagram-3', description: 'From hiring to offboarding, manage every stage of the employee journey in a single system.' },
        { title: 'Improves HR efficiency and automation', icon: 'bi-gear', description: 'Automate repetitive HR tasks like leave approvals, attendance tracking, and payslip generation.' },
        { title: 'Enhances employee experience and engagement', icon: 'bi-heart', description: 'Self-service portals, feedback tools, and transparent processes that boost morale.' },
        { title: 'Integrated with payroll and finance systems', icon: 'bi-link-45deg', description: 'Seamless data flow between HR, payroll, and finance for accurate processing.' }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge-fill',
      title: 'Ready to transform your HR operations?',
      description: 'Join organizations using vSuite HR to build engaged, productive teams.',
      buttonText: 'Get Started Today',
      buttonLink: '#appointment'
    }
  };
}
