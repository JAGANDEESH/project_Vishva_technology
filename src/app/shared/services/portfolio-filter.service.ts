import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PortfolioFilterService {
  private filterSubject = new BehaviorSubject<string>('all');
  filter$ = this.filterSubject.asObservable();

  setFilter(filter: string): void {
    this.filterSubject.next(filter);
  }
}
