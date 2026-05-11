import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface MenuItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-shared-menu',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, RouterLink],
  templateUrl: './shared-menu.html',
  styleUrl: './shared-menu.scss'
})
export class SharedMenuComponent {
  @Input() heading = '';
  @Input() items: MenuItem[] = [];
  @Input() featuredImage?: string;
  @Input() featuredCaption?: string;
  @Output() select = new EventEmitter<void>();

  onItemClick(): void {
    this.select.emit();
  }
}
