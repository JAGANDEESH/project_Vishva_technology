import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-sol-commerce',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class SolCommerceComponent {
  pageData: ProductPageData = {
    themeColor: '#ea580c',
    hero: {
      badgeIcon: 'bi-bag-check ms-1 me-2',
      badgeText: 'Commerce Solutions',
      title: 'Sell More. Faster. Smarter Commerce.',
      description: 'From multi-channel storefronts to AI-powered recommendations and real-time inventory sync — one unified platform to run, grow, and scale your entire commerce operation.',
      imageSrc: 'assets/img/Commerce.webp',
      imageAlt: 'Commerce Solutions Dashboard',
      imageCaptionIcon: 'bi-bag-check',
      imageCaptionText: 'Omnichannel Commerce',
      features: [{"icon":"bi-phone","text":"Mobile-First"},{"icon":"bi-stars","text":"AI-Powered"},{"icon":"bi-headset","text":"24/7 Support"}],
      primaryButton: { text: 'Get Started Free', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [{"icon":"bi-arrow-up-right-circle","value":"2×","label":"Average Sales Growth"},{"icon":"bi-patch-check","value":"99.9%","label":"Platform Uptime SLA"},{"icon":"bi-arrow-return-left","value":"50%","label":"Fewer Product Returns"},{"icon":"bi-rocket-takeoff","value":"1 Day","label":"Go-Live Time"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'End-to-end commerce tools that unify your storefronts, orders, inventory, and customers into one powerful platform.',
      groups: [
        {
          category: 'Core Capabilities',
          icon: 'bi-stars',
          items: ["Multi-Channel Selling: Sell across web, mobile, marketplaces, and social storefronts from a single unified dashboard.","Inventory Management: Real-time stock tracking across warehouses with low-stock alerts and auto-reorder triggers.","Order Processing: Automate order routing, fulfillment, and shipping label generation to eliminate manual steps.","Product Catalog: Manage thousands of SKUs with bulk uploads, variant configurations, and AI-powered descriptions.","Analytics & Insights: Track sales trends, top products, cart abandonment, and customer lifetime value in real time.","Customer Loyalty: Build retention with points programs, personalized offers, and automated re-engagement campaigns."]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built to sell. Designed to scale.',
      title: 'Why Commerce Solutions?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [{"title":"Advantage","icon":"bi-check-circle","description":"Omnichannel sync across all platforms"},{"title":"Advantage","icon":"bi-check-circle","description":"Mobile-first storefront out of the box"},{"title":"Advantage","icon":"bi-check-circle","description":"AI-powered product recommendations"},{"title":"Advantage","icon":"bi-check-circle","description":"One-day launch with pre-built templates"},{"title":"Advantage","icon":"bi-check-circle","description":"Real-time inventory and order sync"},{"title":"Advantage","icon":"bi-check-circle","description":"24/7 support and dedicated onboarding"}]
    },
    cta: {
      icon: 'bi-lightning-charge',
      title: 'Ready to Scale YourCommerce Business?',
      description: 'Unify your storefronts, manage orders in real-time, and grow sales across every channel — all from one powerful platform.',
      buttonText: 'Start Free Trial',
      buttonLink: '#appointment'
    }
  };
}
