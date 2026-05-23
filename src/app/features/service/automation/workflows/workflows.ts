import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-workflows',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class WorkflowsComponent {
  pageData: ProductPageData = {
    themeColor: '#059669',
    pageClass: 'workflow-theme',
    hero: {
      badgeIcon: 'bi-diagram-3 me-2',
      badgeText: 'Workflow Automation',
      title: 'Build Smarter Processes. Automate Every Step.',
      description: 'Design, deploy, and manage structured workflows with approvals, conditions, and automated actions — connecting your entire organisation without a single line of code.',
      imageSrc: 'assets/img/Workflow_process.jpg',
      imageAlt: 'Workflow Automation Dashboard',
      imageCaptionIcon: 'bi-diagram-3-fill',
      imageCaptionText: 'Visual Workflow Builder',
      features: [],
      primaryButton: { text: 'Get Started Free', link: '', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '', icon: 'bi-play-circle' },
      stats: [{"label":"Cycle Time Reduction","value":"80%","icon":"bi-clock-history"},{"label":"Process Visibility","value":"100%","icon":"bi-eye"},{"label":"Manual Steps Eliminated","value":"70%","icon":"bi-check2-all"},{"label":"Faster Approval Cycles","value":"5×","icon":"bi-diagram-3"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'Powerful tools to design, automate, and optimise every business process from end to end.',
      groups: [
        {
          category: 'Process Design',
          icon: 'bi-diagram-3',
          items: [
            "Visual Workflow Builder: Design multi-step processes with a drag-and-drop visual editor — no coding required.",
            "Conditional Logic: Build smart workflows with if/else branching, loop controls, and dynamic routing rules."
          ]
        },
        {
          category: 'Execution & Integration',
          icon: 'bi-lightning',
          items: [
            "Approval Automation: Route tasks through structured approval chains with conditional logic and escalation rules.",
            "Cross-System Triggers: Launch workflows automatically from CRM, ERP, or any connected platform via webhooks or APIs."
          ]
        },
        {
          category: 'Communication & Insights',
          icon: 'bi-bell',
          items: [
            "Notifications & Alerts: Keep teams informed with real-time notifications via email, SMS, or in-app alerts.",
            "Analytics & Reporting: Monitor workflow performance, bottlenecks, and SLA compliance through rich dashboards."
          ]
        }
      ]
    },
    workflow: {
      eyebrow: 'Built for process-driven organisations.',
      title: 'Why Automate Workflows?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [
        { title: "No-Code Builder", icon: "bi-check-circle", description: "No-code visual builder — anyone can design" },
        { title: "Efficiency Gain", icon: "bi-check-circle", description: "Reduces process cycle times by up to 80%" },
        { title: "Universal API", icon: "bi-check-circle", description: "Connects to any system via APIs or webhooks" },
        { title: "Audit Trails", icon: "bi-check-circle", description: "Built-in version control and audit trails" },
        { title: "Scalable Flows", icon: "bi-check-circle", description: "Scales from simple approvals to enterprise flows" },
        { title: "HR & Ops Templates", icon: "bi-check-circle", description: "Ready-made templates for HR, finance & ops" }
      ]
    },
    cta: {
      icon: 'bi-lightning-charge',
      title: 'Ready to Get Started?',
      description: '',
      buttonText: 'Start Free Trial',
      buttonLink: ''
    }
  };
}
