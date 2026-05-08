import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [NgClass],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class ExpertiseComponent {
  activeTab = 0;

  tabs = [
    {
      label: 'Web & Mobile',
      img: 'assets/img/departments-1.jpg',   // laptop with code
      title: 'Web & Mobile Development',
      description: 'We build responsive, scalable web applications and cross-platform mobile apps using the latest frameworks. Our team specializes in Angular, React, Vue, Flutter, and React Native.',
      description2: 'Every project is crafted with performance and user experience at the forefront, ensuring your product stands out in the market.'
    },
    {
      label: 'UI/UX Design',
      img: 'assets/img/departments-3.jpg',   // UI/UX design screen
      title: 'UI/UX Design',
      description: 'Our design team creates intuitive user interfaces backed by deep UX research. We follow a human-centered design process that puts your users first.',
      description2: 'From wireframes to high-fidelity prototypes, we deliver pixel-perfect designs that convert visitors into customers.'
    },
    {
      label: 'Cloud & DevOps',
      img: 'assets/img/departments-4.jpg',   // cloud/server room
      title: 'Cloud & DevOps',
      description: 'Accelerate your software delivery with our cloud infrastructure and DevOps expertise. We work with AWS, Azure, GCP, Docker, Kubernetes, and modern CI/CD tools.',
      description2: 'Our DevOps engineers ensure your systems are reliable, scalable, and secure — with 99.9% uptime SLAs.'
    },
    {
      label: 'AI & ML',
      img: 'assets/img/departments-2.jpg',   // AI/tech concept
      title: 'Artificial Intelligence & ML',
      description: 'Harness the power of AI to automate processes, gain insights, and create intelligent products. We build custom ML models, NLP solutions, and computer vision systems.',
      description2: 'From data strategy to production deployment, our AI team guides you through every step of the AI adoption journey.'
    },
    {
      label: 'Cybersecurity',
      img: 'assets/img/departments-5.jpg',   // security/lock concept
      title: 'Cybersecurity',
      description: 'Protect your business with our comprehensive cybersecurity services including security audits, penetration testing, GDPR compliance, and threat monitoring.',
      description2: 'Our security experts have helped 100+ companies identify and remediate vulnerabilities before they become breaches.'
    }
  ];

  setActiveTab(index: number): void {
    this.activeTab = index;
  }
}
