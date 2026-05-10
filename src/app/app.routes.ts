import { Routes } from '@angular/router';
import { GenericServiceComponent } from './features/shared/generic-service/generic-service';
import { BillingComponent } from './features/products/billing/billing';
import { AccountingComponent } from './features/products/accounting/accounting';
import { PayrollComponent } from './features/products/payroll/payroll';
import { HrComponent } from './features/products/hr/hr';
import { EcommerceComponent } from './features/products/ecommerce/ecommerce';
import { ProcessflowComponent } from './features/products/processflow/processflow';
import { VsuiteFinanceComponent } from './features/products/vsuite-finance/vsuite-finance';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'products/billing',
    component: BillingComponent
  },
  {
    path: 'products/accounting',
    component: AccountingComponent
  },
  {
    path: 'products/finance',
    component: VsuiteFinanceComponent
  },
  {
    path: 'products/payroll',
    component: PayrollComponent
  },
  {
    path: 'products/hr',
    component: HrComponent
  },
  {
    path: 'products/ecommerce',
    component: EcommerceComponent
  },
  {
    path: 'products/processflow',
    component: ProcessflowComponent
  },
  {
    path: 'service/:category/:id',
    component: GenericServiceComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
