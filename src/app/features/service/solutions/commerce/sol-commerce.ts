import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-sol-commerce',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './sol-commerce.html',
  styleUrl: './sol-commerce.scss'
})
export class SolCommerceComponent {
  capabilities = [
    { icon: 'bi-shop',             title: 'Multi-Channel Selling',   description: 'Sell across web, mobile, marketplaces, and social storefronts from a single unified dashboard.' },
    { icon: 'bi-boxes',            title: 'Inventory Management',    description: 'Real-time stock tracking across warehouses with low-stock alerts and auto-reorder triggers.' },
    { icon: 'bi-bag-check',        title: 'Order Processing',        description: 'Automate order routing, fulfillment, and shipping label generation to eliminate manual steps.' },
    { icon: 'bi-grid-3x3-gap',     title: 'Product Catalog',         description: 'Manage thousands of SKUs with bulk uploads, variant configurations, and AI-powered descriptions.' },
    { icon: 'bi-graph-up-arrow',   title: 'Analytics & Insights',    description: 'Track sales trends, top products, cart abandonment, and customer lifetime value in real time.' },
    { icon: 'bi-gift',             title: 'Customer Loyalty',        description: 'Build retention with points programs, personalized offers, and automated re-engagement campaigns.' }
  ];

  whyChoose = [
    'Omnichannel sync across all platforms',
    'Mobile-first storefront out of the box',
    'AI-powered product recommendations',
    'One-day launch with pre-built templates',
    'Real-time inventory and order sync',
    '24/7 support and dedicated onboarding'
  ];

  businessImpact = [
    { icon: 'bi-arrow-up-right-circle', value: '2×',      label: 'Average Sales Growth' },
    { icon: 'bi-patch-check',           value: '99.9%',   label: 'Platform Uptime SLA' },
    { icon: 'bi-arrow-return-left',     value: '50%',     label: 'Fewer Product Returns' },
    { icon: 'bi-rocket-takeoff',        value: '1 Day',   label: 'Go-Live Time' }
  ];
}
