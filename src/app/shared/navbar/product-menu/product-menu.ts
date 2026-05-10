import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface Category {
  title: string;
  icon: string;
  link: string;
  products: Product[];
}

@Component({
  selector: 'app-product-menu',
  standalone: true,
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './product-menu.html',
  styleUrl: './product-menu.scss'
})
export class ProductMenuComponent {
  @Output() select = new EventEmitter<void>();

  categories: Category[] = [
    {
      title: 'vSuite Finance',
      icon: 'bi-currency-dollar',
      link: '/products/finance',
      products: [
        {
          title: 'vSuite Billing',
          description: 'Smart, fast, and GST-ready billing designed for modern businesses.',
          icon: 'bi-receipt',
          link: '/products/billing'
        },
        {
          title: 'vSuite Accounting',
          description: 'Comprehensive accounting made simple, intelligent, and scalable.',
          icon: 'bi-calculator',
          link: '/products/accounting'
        }
      ]
    },
    {
      title: 'vSuite Workforce',
      icon: 'bi-people',
      link: '/service/products/workforce',
      products: [
        {
          title: 'vSuite PayRoll',
          description: 'Accurate, automated, and compliant payroll for modern organizations.',
          icon: 'bi-cash-stack',
          link: '/products/payroll'
        },
        {
          title: 'vSuite Human Resources',
          description: 'Smart HR management to engage, manage, and grow your workforce.',
          icon: 'bi-person-badge',
          link: '/products/hr'
        }
      ]
    },
    {
      title: 'vSuite Commerce',
      icon: 'bi-shop',
      link: '/service/products/commerce',
      products: [
        {
          title: 'vSuite E-Commerce',
          description: 'Build, manage, and grow your online business—effortlessly.',
          icon: 'bi-cart4',
          link: '/products/ecommerce'
        }
      ]
    },
    {
      title: 'vSuite Logistics',
      icon: 'bi-truck',
      link: '/service/products/logistics',
      products: [
        {
          title: 'vSuite ProcessFlow',
          description: 'Automate logistics documents—from retrieval to reconciliation.',
          icon: 'bi-arrow-repeat',
          link: '/products/processflow'
        }
      ]
    }
  ];

  onProductClick(): void {
    this.select.emit();
  }
}
