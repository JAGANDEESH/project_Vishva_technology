import { Routes } from '@angular/router';
import { GenericServiceComponent } from './features/shared/generic-service/generic-service';
import { BillingComponent } from './features/products/billing/billing';
import { AccountingComponent } from './features/products/accounting/accounting';
import { PayrollComponent } from './features/products/payroll/payroll';
import { HrComponent } from './features/products/hr/hr';
import { EcommerceComponent } from './features/products/ecommerce/ecommerce';
import { ProcessflowComponent } from './features/products/processflow/processflow';
import { VsuiteFinanceComponent } from './features/products/vsuite-finance/vsuite-finance';
import { RpaComponent } from './features/service/automation/rpa/rpa';
import { WorkflowsComponent } from './features/service/automation/workflows/workflows';
import { IntegrationsComponent } from './features/service/automation/integrations/integrations';
import { LlmDevelopmentComponent } from './features/service/ai/llm-development/llm-development';
import { RagSolutionsComponent } from './features/service/ai/rag-solutions/rag-solutions';
import { AiConsultingComponent } from './features/service/ai/ai-consulting/ai-consulting';
import { AiAutomationComponent } from './features/service/ai/ai-automation/ai-automation';

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
    path: 'service/automation/rpa',
    component: RpaComponent
  },
  {
    path: 'service/automation/workflows',
    component: WorkflowsComponent
  },
  {
    path: 'service/automation/integrations',
    component: IntegrationsComponent
  },
  {
    path: 'service/ai/llm-development',
    component: LlmDevelopmentComponent
  },
  {
    path: 'service/ai/rag-solutions',
    component: RagSolutionsComponent
  },
  {
    path: 'service/ai/ai-consulting',
    component: AiConsultingComponent
  },
  {
    path: 'service/ai/ai-automation',
    component: AiAutomationComponent
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
