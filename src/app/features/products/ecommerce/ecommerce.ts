import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class EcommerceComponent {
  pageData: ProductPageData = {
    themeColor: '#0D4FD8',
    accentGold: '#B98423',
    pageClass: 'ecommerce-theme',
    hero: {
      badgeIcon: 'bi-cart3',
      badgeText: 'vSuite Commerce Ecosystem',
      title: 'Scale Your Sales.<br>Deliver Seamless Shopping.',
      description: 'vSuite E-Commerce provides a robust, customizable storefront and checkout experience optimized for high conversions, empowering you to sell physical, digital, and B2B products globally.',
      imageSrc: 'assets/img/hero/ecommerce-hero.png',
      imageAlt: 'vSuite E-Commerce platform',
      imageCaptionText: 'Powerful commerce engine for modern brands',
      features: [
        { icon: 'bi-cart-check', text: 'Universal Cart' },
        { icon: 'bi-credit-card-2-front', text: 'Seamless Checkout' },
        { icon: 'bi-graph-up-arrow', text: 'Smart Analytics' },
        { icon: 'bi-shield-lock', text: 'Secure & Reliable' }
      ],
      primaryButton: { text: 'Launch Your Store', link: '#appointment', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'View Demo', link: '#contact', icon: 'bi-play-circle' },
      stats: [
        { value: '2×', label: 'Faster Checkout' },
        { value: '+35%', label: 'Cart Conversion' },
        { value: '99.9%', label: 'Order Accuracy' },
        { value: '1 Day', label: 'Time to Launch' }
      ]
    },
    keyFeatures: {
      title: 'Omnichannel Selling Power',
      description: 'Flexible, feature-rich commerce engine that adapts to your unique business model.',
      groups: [
        { category: 'Universal Shopping Cart', icon: 'bi-cart-check', description: 'Supports any product type across multiple domains with ease.' },
        { category: 'Customizable Platform', icon: 'bi-sliders', description: 'Easily tailor workflows, pricing, and product structures to your needs.' },
        { category: 'Seamless Checkout', icon: 'bi-credit-card-2-front', description: 'Fast, user-friendly checkout experience optimized for better conversions.' },
        { category: 'Smart Management', icon: 'bi-graph-up-arrow', description: 'Track orders, users, and transactions in real time with integrated analytics.' },
        { category: 'Secure & Reliable', icon: 'bi-shield-lock', description: 'Built with secure architecture and scalable cloud-ready infrastructure.' }
      ]
    },
    workflow: {
      eyebrow: 'Built for growth',
      title: 'From storefront to fulfillment in one unified platform.',
      description: 'vSuite E-Commerce empowers teams to manage products, orders, and customers from a single dashboard with intelligent automation.',
      steps: [
        { title: 'Setup', icon: 'bi-shop-window', description: 'Launch your online store with customizable themes, product catalogs, and payment gateway integrations.' },
        { title: 'Sell', icon: 'bi-bag-check', description: 'Accept orders from multiple channels, manage inventory, and process payments seamlessly.' },
        { title: 'Grow', icon: 'bi-graph-up', description: 'Use built-in analytics to understand customer behavior, optimize conversions, and scale globally.' }
      ]
    },
    aiFeatures: {
      title: 'Why Choose vSuite E-Commerce?',
      description: 'Built for conversion, engineered for scale, and designed to minimize friction for your buyers.',
      features: [
        { title: 'Retail & E-Commerce support built in', icon: 'bi-shop', description: 'Full support for physical products, digital goods, and subscription-based models.' },
        { title: 'B2B & wholesale marketplace-ready', icon: 'bi-building', description: 'Built-in support for bulk pricing, wholesale catalogs, and business account management.' },
        { title: 'Supports digital products & subscriptions', icon: 'bi-file-earmark-code', description: 'Sell e-books, courses, software licenses, and recurring subscriptions natively.' },
        { title: 'Scales from startup to enterprise', icon: 'bi-rocket-takeoff', description: 'Architecture designed to handle growing traffic and transaction volumes without performance degradation.' }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge-fill',
      title: 'Ready to launch your online store?',
      description: 'Join forward-thinking brands using vSuite to scale faster and smarter.',
      buttonText: 'Get Started Today',
      buttonLink: '#appointment'
    }
  };
}
