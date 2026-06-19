import { Component } from '@angular/core';
import { ProductLayoutComponent } from '../../../../shared/components/product-layout/product-layout.component';
import { ProductPageData } from '../../../../shared/components/product-layout/product-layout.model';

@Component({
  selector: 'app-rag-solutions',
  standalone: true,
  imports: [ProductLayoutComponent],
  template: '<app-product-layout [data]="pageData"></app-product-layout>',
})
export class RagSolutionsComponent {
  pageData: ProductPageData = {
    themeColor: '#7e22ce',
    hero: {
      badgeIcon: 'bi-search me-2',
      badgeText: 'RAG Solutions',
      title: 'AI Answers Grounded in Your Actual Data.',
      description: 'Retrieval-Augmented Generation delivers accurate, cited, context-aware AI responses — powered by your private knowledge base, not generic training data.',
      imageSrc: 'assets/img/Rag_image.webp',
      imageAlt: 'RAG Solutions Dashboard',
      imageCaptionIcon: 'bi-chat-quote-fill',
      imageCaptionText: 'Context-Aware AI',
      features: [{"icon":"bi-chat-quote","text":"Source-Cited"},{"icon":"bi-shield-check","text":"Private Data"},{"icon":"bi-arrow-repeat","text":"Real-Time Updates"}],
      primaryButton: { text: 'Get Started Free', link: '', icon: 'bi-arrow-right' },
      secondaryButton: { text: 'See a Demo', link: '', icon: 'bi-play-circle' },
      stats: [{"label":"Answer Accuracy","value":"97%","icon":"bi-patch-check"},{"label":"Hallucination Reduction","value":"90%","icon":"bi-shield-check"},{"label":"Query Response Time","value":"<2s","icon":"bi-lightning-charge"},{"label":"Data Sources Supported","value":"50+","icon":"bi-database"}]
    },
    keyFeatures: {
      title: 'What We Offer',
      description: 'Everything needed to build a knowledge-grounded AI assistant — from ingestion to intelligent response generation.',
      groups: [
        {
          category: 'Data & Ingestion',
          icon: 'bi-database-fill-gear',
          items: [
            "Knowledge Base Construction: Ingest, chunk, and index documents, PDFs, wikis, and databases into a structured, queryable knowledge base.",
            "Document Ingestion Pipeline: Automated pipelines to continuously ingest, process, and refresh your knowledge sources."
          ]
        },
        {
          category: 'Retrieval & Search',
          icon: 'bi-search-heart',
          items: [
            "Semantic Search: Find the most relevant content using vector similarity search — beyond keywords, by meaning.",
            "Vector Database Integration: Seamlessly connect with Pinecone, Weaviate, Chroma, or pgvector for scalable embedding storage."
          ]
        },
        {
          category: 'Generation & Accuracy',
          icon: 'bi-patch-check',
          items: [
            "Context-Aware Responses: Deliver precise, cited answers by grounding every LLM response in your actual data.",
            "Hallucination Reduction: Constrain model outputs to verified sources, dramatically reducing fabricated or incorrect answers."
          ]
        }
      ]
    },
    workflow: {
      eyebrow: 'Knowledge that stays current, always.',
      title: 'Why RAG over Fine-Tuning?',
      description: 'See why our platform is the best choice for your organization.',
      steps: [
        { title: "Data Grounding", icon: "bi-check-circle", description: "Answers grounded in your real, up-to-date data" },
        { title: "Traceable Citations", icon: "bi-check-circle", description: "Every response includes traceable source citations" },
        { title: "Secure Storage", icon: "bi-check-circle", description: "Works with private, on-premise data securely" },
        { title: "LLM Agnostic", icon: "bi-check-circle", description: "Integrates with any LLM provider or custom model" },
        { title: "Real-Time Sync", icon: "bi-check-circle", description: "Continuously updated as your knowledge evolves" },
        { title: "Fact Verification", icon: "bi-check-circle", description: "Dramatically reduces hallucination risk" }
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
