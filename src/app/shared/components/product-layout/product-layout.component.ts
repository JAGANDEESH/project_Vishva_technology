import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ProductPageData } from './product-layout.model';

// Color presets mapping accent hex to derived values
const COLOR_PRESETS: Record<string, { hover: string; badgeText: string; dark: string }> = {
  '#198754': { hover: '#157347', badgeText: '#146c43', dark: '#0f5132' },
  '#f97316': { hover: '#ea6c0e', badgeText: '#d4610c', dark: '#b8530a' },
  '#f43f5e': { hover: '#dc3654', badgeText: '#c83049', dark: '#9f2639' },
  '#6366f1': { hover: '#4f52e0', badgeText: '#4547c9', dark: '#3538a8' },
  '#0891b2': { hover: '#067d9a', badgeText: '#056c86', dark: '#045a6e' },
  '#16a39a': { hover: '#0d8f86', badgeText: '#0c7d76', dark: '#096961' },
  '#0d6efd': { hover: '#0b5ed7', badgeText: '#0a58ca', dark: '#084298' },
  '#8b5cf6': { hover: '#7c4fe0', badgeText: '#6f42c1', dark: '#5a349e' },
  '#0d9488': { hover: '#0f766e', badgeText: '#115e59', dark: '#134e4a' },
  '#2563eb': { hover: '#1d4ed8', badgeText: '#1e40af', dark: '#1e3a8a' },
  '#ea580c': { hover: '#c2410c', badgeText: '#9a3412', dark: '#7c2d12' },
  '#059669': { hover: '#047857', badgeText: '#065f46', dark: '#064e3b' },
  '#7c3aed': { hover: '#6d28d9', badgeText: '#5b21b6', dark: '#4c1d95' },
  '#d97706': { hover: '#b45309', badgeText: '#92400e', dark: '#78350f' },
  '#9f1239': { hover: '#881337', badgeText: '#720b2f', dark: '#5b0625' },
  '#be185d': { hover: '#9d174d', badgeText: '#831843', dark: '#691234' },
  '#1d4ed8': { hover: '#1e40af', badgeText: '#1e3a8a', dark: '#172554' },
  '#7e22ce': { hover: '#6b21a8', badgeText: '#581c87', dark: '#3b0764' },
  '#059abc': { hover: '#047a96', badgeText: '#036a83', dark: '#2A4C50' },
  '#059ABC': { hover: '#047a96', badgeText: '#036a83', dark: '#2A4C50' },
  '#5F5F5F': { hover: '#4A4A4A', badgeText: '#3D3D3D', dark: '#2A2A2A' },
  '#8A8A8A': { hover: '#6B6B6B', badgeText: '#5F5F5F', dark: '#4A4A4A' },
  '#6F2DBD': { hover: '#5E22A0', badgeText: '#4B1D8F', dark: '#3A1570' },
  '#0D4FD8': { hover: '#0B42B8', badgeText: '#083A9B', dark: '#062C78' },
  '#0EA5E9': { hover: '#0284C7', badgeText: '#0369A1', dark: '#0C4A6E' },
  '#0D9488': { hover: '#0F766E', badgeText: '#115E59', dark: '#134E4A' },
  '#00b4d0': { hover: '#0097b2', badgeText: '#007a91', dark: '#006070' },
  '#2563a8': { hover: '#1a4f8e', badgeText: '#153f74', dark: '#0f2f5a' },
};

function deriveColors(hex: string): { hover: string; badgeText: string; dark: string } {
  if (COLOR_PRESETS[hex]) return COLOR_PRESETS[hex];
  // Fallback: darken by shifting
  return { hover: hex, badgeText: hex, dark: hex };
}

@Component({
  selector: 'app-product-layout',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './product-layout.component.html',
  styleUrl: './product-layout.component.scss'
})
export class ProductLayoutComponent implements OnInit {
  @Input() data!: ProductPageData;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const accent = this.data?.themeColor || '#198754';
    const derived = deriveColors(accent);
    const host: HTMLElement = this.el.nativeElement;
    host.style.setProperty('--accent-color', accent);
    host.style.setProperty('--accent-hover', derived.hover);
    host.style.setProperty('--accent-badge-text', derived.badgeText);
    host.style.setProperty('--accent-dark', derived.dark);
    if (this.data?.accentGold) {
      host.style.setProperty('--accent-gold', this.data.accentGold);
    }
    if (this.data?.pageClass) {
      this.data.pageClass.split(' ').forEach(cls => host.classList.add(cls));
    }
  }
}
