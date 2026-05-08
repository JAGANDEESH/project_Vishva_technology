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
  autoPlayInterval: any;

  testimonials = [
    {
      img: 'assets/img/testimonials/testimonials-1.jpg',
      name: 'Saul Goodman',
      role: 'CEO, Goodman Consulting',
      stars: 5,
      quote: "Vishva Techno Labs delivered our platform ahead of schedule with exceptional quality. Their communication and technical expertise are unmatched. Highly recommended!"
    },
    {
      img: 'assets/img/testimonials/testimonials-2.jpg',
      name: 'Sara Wilkins',
      role: 'Product Manager, TechCorp',
      stars: 5,
      quote: "The team understood our vision perfectly and turned it into a stunning product. The UI/UX design exceeded all our expectations. We'll definitely partner again."
    },
    {
      img: 'assets/img/testimonials/testimonials-3.jpg',
      name: 'Jena Karlis',
      role: 'CTO, StartupXYZ',
      stars: 5,
      quote: "Professional, skilled, and dedicated. Vishva Techno Labs built our entire cloud infrastructure from scratch. The result is a rock-solid system that scales effortlessly."
    },
    {
      img: 'assets/img/testimonials/testimonials-4.jpg',
      name: 'Matt Brandon',
      role: 'Founder, BrandForge',
      stars: 5,
      quote: "From the initial consultation to final delivery, the experience was seamless. Our app got 50,000 downloads in the first month. Incredible work by the entire team!"
    },
    {
      img: 'assets/img/testimonials/testimonials-5.jpg',
      name: 'John Larson',
      role: 'VP Engineering, DataFlow',
      stars: 5,
      quote: "The AI solution they built for us reduced manual processing by 80%. Their ML engineers are top-notch and truly understood our domain requirements."
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
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.startAutoPlay();
    }
  }
}
