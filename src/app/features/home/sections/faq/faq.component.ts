import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

interface FaqItem {
  num: string;
  question: string;
  answer: string;
  active: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs: FaqItem[] = [
    {
      num: '01',
      question: 'What technologies do you use for web development?',
      answer: 'We use modern frameworks including Angular, React, and Vue.js for frontend, paired with Node.js, Python, and .NET for backend. We also leverage TypeScript, GraphQL, and RESTful APIs.',
      active: true
    },
    {
      num: '02',
      question: 'How long does it take to build a web application?',
      answer: 'Project timelines depend on complexity. A simple website takes 2–4 weeks, while a complex web application may take 3–6 months. We provide detailed estimates after our initial consultation.',
      active: false
    },
    {
      num: '03',
      question: 'Do you offer post-launch support and maintenance?',
      answer: 'Yes, we offer flexible support packages including 24/7 monitoring, bug fixes, security updates, and feature enhancements. Our team ensures your product runs smoothly long after launch.',
      active: false
    },
    {
      num: '04',
      question: 'Can you work with our existing development team?',
      answer: 'Absolutely. We offer staff augmentation services and can integrate seamlessly with your in-house team, following your existing processes, tools, and coding standards.',
      active: false
    },
    {
      num: '05',
      question: 'How do you handle project communication and transparency?',
      answer: 'We use agile methodologies with weekly sprints, daily standups (if needed), and regular demo sessions. You get access to project management tools like Jira and real-time progress reports.',
      active: false
    },
    {
      num: '06',
      question: 'What is your pricing model?',
      answer: 'We offer fixed-price, time-and-material, and dedicated team models. Pricing depends on project scope, technology stack, and team size. Contact us for a free estimate.',
      active: false
    }
  ];

  toggleFaq(index: number): void {
    this.faqs.forEach((faq, i) => {
      faq.active = i === index ? !faq.active : false;
    });
  }
}
