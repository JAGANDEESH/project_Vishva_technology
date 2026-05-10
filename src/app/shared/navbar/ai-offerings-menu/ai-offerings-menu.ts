import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MenuItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-ai-offerings-menu',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './ai-offerings-menu.html',
  styleUrl: './ai-offerings-menu.scss'
})
export class AiOfferingsMenuComponent {
  @Output() select = new EventEmitter<void>();

  items: MenuItem[] = [
    {
      title: 'LLM Development',
      description: 'Build intelligent applications powered by custom Large Language Models.',
      icon: 'bi-chat-dots',
      link: '/service/ai/llm-development'
    },
    {
      title: 'RAG Solutions',
      description: 'Deliver accurate, context-aware AI responses using your specific data.',
      icon: 'bi-search',
      link: '/service/ai/rag-solutions'
    },
    {
      title: 'AI Consulting',
      description: 'Strategic guidance to identify AI opportunities and define implementation roadmaps.',
      icon: 'bi-lightbulb',
      link: '/service/ai/ai-consulting'
    },
    {
      title: 'AI Automation',
      description: 'Combine AI with automation to handle complex and unstructured business tasks.',
      icon: 'bi-gear',
      link: '/service/ai/ai-automation'
    }
  ];

  onItemClick(): void {
    this.select.emit();
  }
}
