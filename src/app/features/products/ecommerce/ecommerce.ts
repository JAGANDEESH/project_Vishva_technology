import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './ecommerce.html',
  styleUrl: './ecommerce.scss'
})
export class EcommerceComponent {
  features = [
    {
      title: 'Universal Shopping Cart',
      description: 'Supports any product type across multiple domains with ease.',
      icon: 'bi-cart-check'
    },
    {
      title: 'Customizable Platform',
      description: 'Easily tailor workflows, pricing, and product structures to your needs.',
      icon: 'bi-sliders'
    },
    {
      title: 'Seamless Checkout',
      description: 'Fast, user-friendly checkout experience optimized for better conversions.',
      icon: 'bi-credit-card-2-front'
    },
    {
      title: 'Smart Management',
      description: 'Track orders, users, and transactions in real time with integrated analytics.',
      icon: 'bi-graph-up-arrow'
    },
    {
      title: 'Secure & Reliable',
      description: 'Built with secure architecture and scalable cloud-ready infrastructure.',
      icon: 'bi-shield-lock'
    }
  ];

  useCases = [
    'Retail & E-commerce',
    'Digital Products',
    'Subscription Services',
    'B2B Platforms',
    'Service Booking Systems'
  ];
}
