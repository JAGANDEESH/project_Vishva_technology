import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('typewriterEl') typewriterEl!: ElementRef<HTMLSpanElement>;

  private readonly phrases = ['Innovate Smart.', 'Automate Fast.', 'Scale Limitlessly.'];

  ngAfterViewInit(): void {
    const video = this.heroVideo.nativeElement;
    video.muted = true;
    video.volume = 0;
    video.play().catch(() => {});
    this.runTypewriter();
  }

  private runTypewriter(): void {
    const el = this.typewriterEl.nativeElement;
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;

    const tick = () => {
      const current = this.phrases[phraseIdx];
      if (!deleting) {
        charIdx++;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
      } else {
        charIdx--;
        el.textContent = current.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % this.phrases.length;
        }
      }
      setTimeout(tick, deleting ? 55 : 95);
    };
    tick();
  }
}
