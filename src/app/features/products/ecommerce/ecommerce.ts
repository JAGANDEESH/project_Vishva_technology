import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [NgFor, NgClass],
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

  whyChoose = [
    'Retail & E-Commerce support built in',
    'Supports digital products & subscriptions',
    'B2B & wholesale marketplace-ready',
    'Service booking systems integrated',
    'Fully customizable to your workflow',
    'Scales from startup to enterprise'
  ];

  businessImpact = [
    { label: 'Faster Checkout',    value: '2×',    icon: 'bi-lightning-charge'  },
    { label: 'Cart Conversion',    value: '+35%',  icon: 'bi-cart-check'        },
    { label: 'Order Accuracy',     value: '99.9%', icon: 'bi-check-circle'      },
    { label: 'Time to Launch',     value: '1 Day', icon: 'bi-clock-history'     }
  ];
}
