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
  selector: 'app-automation-menu',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './automation-menu.html',
  styleUrl: './automation-menu.scss'
})
export class AutomationMenuComponent {
  @Output() select = new EventEmitter<void>();

  items: MenuItem[] = [
    {
      title: 'RPA',
      description: 'Automate rule-based, repetitive activities such as data entry and system interactions.',
      icon: 'bi-robot',
      link: '/service/automation/rpa'
    },
    {
      title: 'Workflows',
      description: 'Define structured processes with approvals, conditions, and automated consistency.',
      icon: 'bi-diagram-3',
      link: '/service/automation/workflows'
    },
    {
      title: 'Integrations',
      description: 'Connect your business systems seamlessly from ERP and CRM to specialized platforms.',
      icon: 'bi-plug',
      link: '/service/automation/integrations'
    }
  ];

  onItemClick(): void {
    this.select.emit();
  }
}
