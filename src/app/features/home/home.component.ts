import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { StatsComponent } from './sections/stats/stats.component';
import { ServicesComponent } from './sections/services/services.component';
import { AiAutomationComponent } from './sections/ai-automation/ai-automation.component';
import { QuoteComponent } from './sections/quote/quote.component';
import { ExpertiseComponent } from './sections/expertise/expertise.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { TeamComponent } from './sections/team/team.component';
import { FaqComponent } from './sections/faq/faq.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    StatsComponent,
    ServicesComponent,
    AiAutomationComponent,
    QuoteComponent,
    ExpertiseComponent,
    PortfolioComponent,
    TeamComponent,
    FaqComponent,
    TestimonialsComponent,
    GalleryComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-stats></app-stats>
    <app-services></app-services>
    <app-ai-automation></app-ai-automation>
    <app-quote></app-quote>
    <app-expertise></app-expertise>
    <app-portfolio></app-portfolio>
    <app-team></app-team>
    <app-faq></app-faq>
    <app-testimonials></app-testimonials>
    <app-gallery></app-gallery>
    <app-contact></app-contact>
  `,
  styles: []
})
export class HomeComponent {}
