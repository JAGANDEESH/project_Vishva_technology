import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const win = window as any;

    const init = () => {
      if (win.PureCounter) {
        new win.PureCounter();
      }
    };

    if (win.PureCounter) {
      // Script already loaded — run after a tick so the DOM is painted
      setTimeout(init, 100);
    } else {
      // Script still loading — wait for it, then reinit
      const script = document.querySelector('script[src*="purecounter"]');
      if (script) {
        script.addEventListener('load', () => setTimeout(init, 100));
      }
      // Hard fallback in case the load event already fired
      setTimeout(init, 1500);
    }
  }
}
