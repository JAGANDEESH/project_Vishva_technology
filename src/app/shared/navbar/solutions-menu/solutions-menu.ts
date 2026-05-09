import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MenuItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-solutions-menu',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, RouterLink],
  templateUrl: './solutions-menu.html',
  styleUrl: './solutions-menu.scss'
})
export class SolutionsMenuComponent {
  @Output() select = new EventEmitter<void>();

  items: MenuItem[] = [
    {
      title: 'Finance',
      description: 'Streamline billing, accounting, and cash flow visibility with GST-ready solutions.',
      icon: 'bi-bank',
      link: '/service/solutions/finance'
    },
    {
      title: 'Commerce',
      description: 'Sell smarter and scale faster with modern storefronts and omnichannel management.',
      icon: 'bi-bag',
      link: '/service/solutions/commerce'
    },
    {
      title: 'Workforce',
      description: 'Simplify people operations from payroll processing to employee lifecycle management.',
      icon: 'bi-person-workspace',
      link: '/service/solutions/workforce'
    },
    {
      title: 'Logistics',
      description: 'Optimize shipping operations through intelligent document retrieval and reconciliation.',
      icon: 'bi-box-seam',
      link: '/service/solutions/logistics'
    }
  ];

  onItemClick(): void {
    this.select.emit();
  }
}
