export type Token = {
  slug: string;
  cmcRank: number;
  name: string;
  symbol: string;
  color: string;
  status: 'halal' | 'haram' | 'syubhat';
  tvPair: string;
  tags: string[];
  website: string;
  logoUrl: string;
  certificateUrl: string;
  overview: string;
  conclusion: string;
};
