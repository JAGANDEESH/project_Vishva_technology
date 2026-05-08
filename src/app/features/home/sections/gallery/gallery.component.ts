import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  images = [
    'assets/img/gallery/gallery-1.jpg',
    'assets/img/gallery/gallery-2.jpg',
    'assets/img/gallery/gallery-3.jpg',
    'assets/img/gallery/gallery-4.jpg',
    'assets/img/gallery/gallery-5.jpg',
    'assets/img/gallery/gallery-6.jpg',
    'assets/img/gallery/gallery-7.jpg',
    'assets/img/gallery/gallery-8.jpg'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const win = window as any;
      const initLightbox = () => {
        if (win.GLightbox) {
          win.GLightbox({ selector: '.glightbox' });
        }
      };
      if (win.GLightbox) {
        initLightbox();
      } else {
        window.addEventListener('load', initLightbox);
      }
    }
  }
}
