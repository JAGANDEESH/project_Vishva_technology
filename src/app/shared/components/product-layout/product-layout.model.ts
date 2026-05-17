export interface ProductHero {
  badgeIcon: string;
  badgeText: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCaptionIcon?: string;
  imageCaptionText?: string;
  features: { icon: string; text: string }[];
  primaryButton: { text: string; link: string; icon?: string };
  secondaryButton?: { text: string; link: string; icon?: string };
  stats: { value: string; label: string; icon?: string }[];
}

export interface ProductKeyFeatureGroup {
  category: string;
  icon: string;
  description?: string;
  items?: string[];
}

export interface ProductKeyFeatures {
  title: string;
  description: string;
  groups: ProductKeyFeatureGroup[];
}

export interface ProductWorkflowStep {
  title: string;
  icon: string;
  description: string;
}

export interface ProductWorkflow {
  eyebrow?: string;
  title: string;
  description: string;
  steps: ProductWorkflowStep[];
}

export interface ProductAiFeature {
  title: string;
  icon: string;
  description: string;
}

export interface ProductAiFeatures {
  title: string;
  description: string;
  features: ProductAiFeature[];
}

export interface ProductCta {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ProductPageData {
  themeColor?: string;
  hero: ProductHero;
  keyFeatures?: ProductKeyFeatures;
  workflow?: ProductWorkflow;
  aiFeatures?: ProductAiFeatures;
  cta: ProductCta;
}
