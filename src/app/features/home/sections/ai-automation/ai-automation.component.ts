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
      icon: 'bi-chat-dots',
      title: 'LLM Development',
      description: 'Custom LLM-based applications including chatbots, virtual assistants, copilots, document understanding, and natural language query interfaces with domain-specific fine-tuning.'
    },
    {
      icon: 'bi-search',
      title: 'RAG Solutions',
      description: 'Retrieval-Augmented Generation combining AI models with your business data to provide reliable, real-time, context-rich outputs — connecting AI with internal documents and databases.'
    },
    {
      icon: 'bi-lightbulb',
      title: 'AI Consulting',
      description: 'Strategic guidance on AI adoption, data strategy, model selection, and production deployment — turning complex AI concepts into real, measurable business value.'
    },
    {
      icon: 'bi-gear-wide-connected',
      title: 'AI Automation',
      description: 'Intelligent automation combining RPA with AI to handle semi-structured data, self-healing bots that adapt to changes, and AI-driven decisioning for complex workflows.'
    },
    {
      icon: 'bi-translate',
      title: 'Natural Language Processing',
      description: 'Sentiment analysis, document classification, entity extraction, and multi-language support — turning unstructured data into actionable business intelligence.'
    },
    {
      icon: 'bi-cpu',
      title: 'AI-Powered Integration',
      description: 'Plug AI capabilities directly into your existing enterprise systems with secure, private deployments and context-aware responses with memory support.'
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
