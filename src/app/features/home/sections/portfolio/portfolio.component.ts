import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { PortfolioFilterService } from '../../../../shared/services/portfolio-filter.service';

interface PortfolioItem {
  title: string;
  category: string;
  tag: string;
  description: string;
  img: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  activeFilter = 'all';
  private filterSub!: Subscription;

  constructor(private portfolioFilter: PortfolioFilterService) {}

  ngOnInit(): void {
    this.filterSub = this.portfolioFilter.filter$.subscribe(f => {
      this.activeFilter = f;
    });
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

  filters = [
    { key: 'all', label: 'All' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' },
    { key: 'ai', label: 'AI & Automation' }
  ];

  projects: PortfolioItem[] = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      tag: 'Web Development',
      description: 'A fully featured multi-vendor marketplace with real-time inventory, payment gateway, and analytics dashboard.',
      img: 'assets/img/gallery/gallery-1.jpg',
      icon: 'bi-cart4',
      color: '#2094E7'
    },
    {
      title: 'Healthcare Patient Portal',
      category: 'web',
      tag: 'Web Development',
      description: 'HIPAA-compliant patient management portal with appointment scheduling, medical records, and telemedicine integration.',
      img: 'assets/img/gallery/gallery-2.jpg',
      icon: 'bi-hospital',
      color: '#2094E7'
    },
    {
      title: 'Fitness Tracker App',
      category: 'mobile',
      tag: 'Mobile Apps',
      description: 'Cross-platform fitness app with workout tracking, nutrition logging, wearable sync, and AI-powered coach.',
      img: 'assets/img/gallery/gallery-3.jpg',
      icon: 'bi-phone',
      color: '#28a745'
    },
    {
      title: 'Food Delivery App',
      category: 'mobile',
      tag: 'Mobile Apps',
      description: 'On-demand food delivery platform with real-time order tracking, driver dispatch, and in-app payment.',
      img: 'assets/img/gallery/gallery-4.jpg',
      icon: 'bi-bag-check',
      color: '#28a745'
    },
    {
      title: 'SaaS Dashboard Redesign',
      category: 'design',
      tag: 'UI/UX Design',
      description: 'Complete UX overhaul of a B2B analytics platform, reducing user onboarding time by 40% through intuitive design.',
      img: 'assets/img/gallery/gallery-5.jpg',
      icon: 'bi-palette',
      color: '#fd7e14'
    },
    {
      title: 'Mobile Banking UX',
      category: 'design',
      tag: 'UI/UX Design',
      description: 'User-centric redesign of a banking app serving 2M+ users, improving task completion rate by 35%.',
      img: 'assets/img/gallery/gallery-6.jpg',
      icon: 'bi-credit-card',
      color: '#fd7e14'
    },
    {
      title: 'AI Customer Support Bot',
      category: 'ai',
      tag: 'AI & Automation',
      description: 'Intelligent chatbot powered by LLMs that handles 80% of customer queries autonomously, reducing support costs.',
      img: 'assets/img/gallery/gallery-7.jpg',
      icon: 'bi-robot',
      color: '#6f42c1'
    },
    {
      title: 'Predictive Analytics Platform',
      category: 'ai',
      tag: 'AI & Automation',
      description: 'ML-powered forecasting engine that predicts sales demand with 94% accuracy, optimizing inventory for retail chains.',
      img: 'assets/img/gallery/gallery-8.jpg',
      icon: 'bi-graph-up-arrow',
      color: '#6f42c1'
    },
    {
      title: 'RPA Workflow Engine',
      category: 'ai',
      tag: 'AI & Automation',
      description: 'Robotic Process Automation solution that eliminated 12,000 manual data-entry hours/year for a financial institution.',
      img: 'assets/img/gallery/gallery-1.jpg',
      icon: 'bi-gear-wide-connected',
      color: '#6f42c1'
    },
    {
      title: 'Computer Vision QC System',
      category: 'ai',
      tag: 'AI & Automation',
      description: 'Automated quality inspection system using computer vision that detects product defects with 99.2% precision.',
      img: 'assets/img/gallery/gallery-2.jpg',
      icon: 'bi-eye',
      color: '#6f42c1'
    }
  ];

  get filteredProjects(): PortfolioItem[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(key: string): void {
    this.portfolioFilter.setFilter(key);
  }
}
