import {
  Component, AfterViewInit, OnDestroy,
  ElementRef, ViewChild, ViewChildren, QueryList, NgZone
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [NgClass],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss'
})
export class ExpertiseComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sectionContainer') sectionContainer!: ElementRef<HTMLElement>;
  @ViewChildren('tabBtn') tabBtns!: QueryList<ElementRef<HTMLButtonElement>>;

  activeTab = 0;
  prevTab = -1;
  scrollDirection: 'down' | 'up' = 'down';
  indicatorTop = 0;

  private isAnimating = false;
  private enterListener!: () => void;
  private leaveListener!: () => void;
  private wheelListener!: (e: WheelEvent) => void;
  private touchStartX = 0;
  private touchStartListener!: (e: TouchEvent) => void;
  private touchEndListener!: (e: TouchEvent) => void;

  tabs = [
    {
      label: 'RPA',
      img: 'assets/img/departments-1.jpg',
      title: 'Robotic Process Automation',
      description: 'RPA enables businesses to automate rule-based, repetitive activities such as data entry, document handling, and system interactions — without changing existing systems. It reduces human effort and ensures consistent execution across operations.',
      description2: 'Advanced capabilities include AI-assisted bots for semi-structured data, self-healing automation that adapts to UI changes, and bot performance monitoring with analytics. High-volume task processing with zero errors and full audit logs for traceability.'
    },
    {
      label: 'Workflows',
      img: 'assets/img/departments-3.jpg',
      title: 'Intelligent Workflows',
      description: 'Workflows allow organizations to define structured processes with approvals, conditions, and automation — ensuring consistency and visibility across all operations. A visual workflow builder with drag-and-drop makes process design accessible to everyone.',
      description2: 'Advanced capabilities include dynamic workflows with AI-driven decisioning, cross-module workflows spanning Finance, HR, and Logistics, and low-code/no-code customization. Multi-step approvals, SLA tracking, escalation rules, and real-time process monitoring included.'
    },
    {
      label: 'Integrations',
      img: 'assets/img/departments-4.jpg',
      title: 'System Integrations',
      description: 'We connect your business systems seamlessly — from ERP and CRM to finance, logistics, and HR platforms. Our integration layer eliminates data silos, reduces manual handoffs, and ensures real-time data flow across your entire business ecosystem.',
      description2: 'Supports integration with email, API, and web-based sources. Vendor-wise configuration and scheduling for automated data flows. Push validated data directly into ERP systems with full support for finance modules including billing and accounting.'
    },
    {
      label: 'AI Automation',
      img: 'assets/img/departments-2.jpg',
      title: 'AI-Powered Automation',
      description: 'We go beyond traditional RPA by integrating Artificial Intelligence to bring adaptability and decision-making into the process. AI-assisted bots handle semi-structured data, interpret unstructured inputs, and make predictive decisions.',
      description2: 'From managing complex workflows to anomaly detection and intelligent exception handling, our AI automation solutions are designed to evolve with your business and support long-term growth at scale.'
    }
  ];

  constructor(private zone: NgZone) {}

  setActiveTab(index: number): void {
    if (index === this.activeTab || this.isAnimating) return;
    this.scrollDirection = index > this.activeTab ? 'down' : 'up';
    this.prevTab = this.activeTab;
    this.activeTab = index;
    this.isAnimating = true;
    this.updateIndicator();
    setTimeout(() => {
      this.prevTab = -1;
      this.isAnimating = false;
    }, 550);
  }

  private updateIndicator(): void {
    requestAnimationFrame(() => {
      const btns = this.tabBtns?.toArray();
      if (!btns?.[this.activeTab]) return;
      const btn = btns[this.activeTab].nativeElement;
      const tabsEl = btn.closest('.departments-tabs') as HTMLElement;
      if (!tabsEl) return;
      const tabsRect = tabsEl.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      this.indicatorTop = btnRect.top - tabsRect.top + btnRect.height / 2 - 12;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateIndicator(), 60);

    const el = this.sectionContainer.nativeElement;
    this.wheelListener = (e: WheelEvent) => this.onWheel(e);
    this.enterListener = () => window.addEventListener('wheel', this.wheelListener, { passive: false });
    this.leaveListener = () => window.removeEventListener('wheel', this.wheelListener);

    this.touchStartListener = (e: TouchEvent) => {
      this.touchStartX = e.touches[0].clientX;
    };
    this.touchEndListener = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - this.touchStartX;
      if (Math.abs(dx) > 48) {
        this.zone.run(() => {
          if (dx < 0) this.setActiveTab(this.activeTab + 1);
          else        this.setActiveTab(this.activeTab - 1);
        });
      }
    };

    this.zone.runOutsideAngular(() => {
      el.addEventListener('mouseenter', this.enterListener);
      el.addEventListener('mouseleave', this.leaveListener);
      el.addEventListener('touchstart', this.touchStartListener, { passive: true });
      el.addEventListener('touchend',   this.touchEndListener,   { passive: true });
    });
  }

  private onWheel(e: WheelEvent): void {
    const scrollingDown = e.deltaY > 0;
    if (scrollingDown && this.activeTab < this.tabs.length - 1) {
      e.preventDefault();
      if (!this.isAnimating) this.zone.run(() => this.setActiveTab(this.activeTab + 1));
    } else if (!scrollingDown && this.activeTab > 0) {
      e.preventDefault();
      if (!this.isAnimating) this.zone.run(() => this.setActiveTab(this.activeTab - 1));
    }
  }

  ngOnDestroy(): void {
    const el = this.sectionContainer?.nativeElement;
    if (el) {
      el.removeEventListener('mouseenter',  this.enterListener);
      el.removeEventListener('mouseleave',  this.leaveListener);
      el.removeEventListener('touchstart',  this.touchStartListener);
      el.removeEventListener('touchend',    this.touchEndListener);
    }
    window.removeEventListener('wheel', this.wheelListener);
  }
}
