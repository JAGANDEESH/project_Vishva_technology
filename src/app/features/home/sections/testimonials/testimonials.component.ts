import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  @ViewChild('swiperEl', { static: true }) swiperEl!: ElementRef;

  private swiperInstance: any;
  currentIndex = 0;
  isVisible = true;
  autoPlayInterval: any;

  testimonials = [
    {
      img: 'assets/img/testimonials/testimonials-1.jpg',
      name: 'Michael Chen',
      role: 'Business Owner, Retail Hub',
      stars: 5,
      quote: "vSuite Accounting helped us manage billing and accounting in one place—huge time saver. The integration is seamless and highly reliable."
    },
    {
      img: 'assets/img/testimonials/testimonials-2.jpg',
      name: 'Sarah Williams',
      role: 'Senior Accountant, Finance Pro',
      stars: 5,
      quote: "Clear insights and easy GST handling made our work effortless. vSuite Accounting is truly future-ready and scales with our growth."
    },
    {
      img: 'assets/img/testimonials/testimonials-3.jpg',
      name: 'David Miller',
      role: 'Logistics Operations Team',
      stars: 5,
      quote: "We reduced hours of manual work to minutes with vSuite ProcessFlow. Accurate extraction and seamless integration made reconciliation effortless."
    },
    {
      img: 'assets/img/testimonials/testimonials-4.jpg',
      name: 'Elena Rodriguez',
      role: 'HR Manager, TechScale',
      stars: 5,
      quote: "vSuite Payroll simplified our salary process and saved hours every month. It ensures full compliance and precision every time."
    },
    {
      img: 'assets/img/testimonials/testimonials-5.jpg',
      name: 'Robert Taylor',
      role: 'HR Lead, Global Solutions',
      stars: 5,
      quote: "vSuite Human Resources gave us complete visibility into our workforce and simplified HR operations across all our departments."
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.transition(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    });
  }

  goToSlide(index: number): void {
    this.transition(() => {
      this.currentIndex = index;
    });
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.startAutoPlay();
    }
  }

  private transition(changeFn: () => void): void {
    this.isVisible = false;
    setTimeout(() => {
      changeFn();
      this.isVisible = true;
    }, 280);
  }
}
