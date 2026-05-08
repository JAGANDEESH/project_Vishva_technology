import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-ai-automation',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './ai-automation.component.html',
  styleUrl: './ai-automation.component.scss'
})
export class AiAutomationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('statsBar') statsBar!: ElementRef<HTMLElement>;

  private observer!: IntersectionObserver;

  capabilities = [
    {
      icon: 'bi-robot',
      title: 'Intelligent Chatbots',
      description: 'LLM-powered conversational agents that handle customer queries, bookings, and support — 24/7, at scale.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Predictive Analytics',
      description: 'Machine learning models that forecast demand, detect anomalies, and surface actionable business insights.'
    },
    {
      icon: 'bi-gear-wide-connected',
      title: 'Robotic Process Automation',
      description: 'Eliminate repetitive manual tasks by automating data entry, document processing, and multi-system workflows.'
    },
    {
      icon: 'bi-eye',
      title: 'Computer Vision',
      description: 'Image recognition and video analysis systems for quality inspection, facial recognition, and real-time monitoring.'
    },
    {
      icon: 'bi-translate',
      title: 'Natural Language Processing',
      description: 'Sentiment analysis, document classification, entity extraction, and custom NLP pipelines for unstructured data.'
    },
    {
      icon: 'bi-cpu',
      title: 'AI-Powered APIs',
      description: 'Plug AI capabilities directly into your existing products via lightweight, production-ready REST and GraphQL APIs.'
    }
  ];

  stats = [
    { end: 80, suffix: '%', label: 'Reduction in manual tasks', display: '0' },
    { end: 3,  suffix: '×', label: 'Faster decision-making',   display: '0' },
    { end: 94, suffix: '%', label: 'Average model accuracy',   display: '0' },
    { end: 60, suffix: '+', label: 'AI projects delivered',    display: '0' }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.animateAll();
          this.observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.statsBar.nativeElement);
  }

  private animateAll(): void {
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);

      this.stats.forEach(stat => {
        stat.display = Math.floor(eased * stat.end).toString();
      });
      this.cdr.detectChanges();

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
