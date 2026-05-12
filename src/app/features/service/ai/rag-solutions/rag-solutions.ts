import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-rag-solutions',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './rag-solutions.html',
  styleUrl: './rag-solutions.scss'
})
export class RagSolutionsComponent {
  capabilities = [
    {
      title: 'Knowledge Base Construction',
      description: 'Ingest, chunk, and index documents, PDFs, wikis, and databases into a structured, queryable knowledge base.',
      icon: 'bi-database'
    },
    {
      title: 'Semantic Search',
      description: 'Find the most relevant content using vector similarity search — beyond keywords, by meaning.',
      icon: 'bi-search'
    },
    {
      title: 'Vector Database Integration',
      description: 'Seamlessly connect with Pinecone, Weaviate, Chroma, or pgvector for scalable embedding storage.',
      icon: 'bi-grid-3x3-gap'
    },
    {
      title: 'Document Ingestion Pipeline',
      description: 'Automated pipelines to continuously ingest, process, and refresh your knowledge sources.',
      icon: 'bi-file-earmark-arrow-up'
    },
    {
      title: 'Context-Aware Responses',
      description: 'Deliver precise, cited answers by grounding every LLM response in your actual data.',
      icon: 'bi-chat-quote'
    },
    {
      title: 'Hallucination Reduction',
      description: 'Constrain model outputs to verified sources, dramatically reducing fabricated or incorrect answers.',
      icon: 'bi-shield-check'
    }
  ];

  whyChoose = [
    'Answers grounded in your real, up-to-date data',
    'Every response includes traceable source citations',
    'Works with private, on-premise data securely',
    'Integrates with any LLM provider or custom model',
    'Continuously updated as your knowledge evolves',
    'Dramatically reduces hallucination risk'
  ];

  businessImpact = [
    { label: 'Answer Accuracy',          value: '97%',  icon: 'bi-patch-check'   },
    { label: 'Hallucination Reduction',  value: '90%',  icon: 'bi-shield-check'  },
    { label: 'Query Response Time',      value: '<2s',  icon: 'bi-lightning-charge' },
    { label: 'Data Sources Supported',   value: '50+',  icon: 'bi-database'      }
  ];
}
