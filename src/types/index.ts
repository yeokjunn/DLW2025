export interface Article {
  title: string;
  content: string;
  source?: string;
  author?: string;
  date?: string;
}

export type BiasCategory = 
  | 'political'
  | 'emotional'
  | 'balance'
  | 'demographic'
  | 'sensationalism'
  | 'socioeconomic';

export interface BiasResult {
  category: BiasCategory;
  score: number;
  explanation: string;
}

export interface FactCheckResult {
  isFactual: boolean;
  confidence: number;
  explanation: string;
}

export interface AnalysisResult {
  biases: BiasResult[];
  factCheck: FactCheckResult[];
  overallBiasScore: number;
  overallFactualScore: number;
  summary: string;
} 