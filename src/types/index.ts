export interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

export interface ComparisonMetric {
  name: string;
  dogpow: string | boolean;
  others: string | boolean;
}

export interface TokenAllocation {
  label: string;
  percentage: number;
  color: string;
}
