import type { Token, TokenQuote } from '$lib/models';

export async function getTokens(
  fetch: any,
  baseUrl: string,
  params: {
    slug?: string;
    keyword?: string;
    status?: 'halal' | 'haram' | 'syubhat';
    skip?: string[];
    range?: [number, number];
    includeContent?: boolean;
  } = {}
): Promise<Token[]> {
  try {
    const url = new URL(baseUrl + '/api/tokens');

    if (params.slug) url.searchParams.set('slug', params.slug);
    if (params.keyword) url.searchParams.set('keyword', params.keyword);
    if (params.status) url.searchParams.set('status', params.status);
    if (params.skip && params.skip.length > 0) url.searchParams.set('skip', params.skip.join(','));
    if (params.range && params.range.length === 2) {
      const [from, to] = params.range;
      url.searchParams.set('range', `${from},${to}`);
    }

    const res = await fetch(url);

    if (!res.ok) throw new Error('Failed to fetch tokens');

    const result = await res.json();

    if (result.error) throw new Error(result.message);

    const tokens: Token[] = result.data.map(async (token: any) => {
      let overview = '';
      let conclusion = '';

      if (params.includeContent) {
        overview = await (await fetch(token.overview_url)).text();
        conclusion = await (await fetch(token.conclusion_url)).text();
      }

      return {
        slug: token.slug,
        cmcRank: token.cmc_rank,
        name: token.name,
        symbol: token.symbol,
        color: token.color,
        status: token.status,
        tvPair: token.tv_pair,
        tags: token.tags,
        website: token.website,
        logoUrl: token.logo_url,
        certificateUrl: token.certificate_url,
        overview: overview,
        conclusion: conclusion
      };
    });

    return await Promise.all(tokens);
  } catch (error: any) {
    console.error(error);
    throw new Error(error.toString());
  }
}

export async function getTokenQuotes(
  fetch: any,
  baseUrl: string,
  params: {
    slugs: string[];
  } = { slugs: [] }
): Promise<TokenQuote[]> {
  try {
    const res = await fetch(`/api/tokens/quotes?slugs=${params.slugs.join(',')}`);

    if (!res.ok) throw new Error('Failed to fetch token quotes');

    const result = await res.json();

    if (result.error) throw new Error(result.message);

    const quotes: TokenQuote[] = result.data.map((quote: any) => {
      return {
        slug: quote.slug,
        cmcRank: quote.cmc_rank,
        infiniteSupply: quote.infinite_supply,
        maxSupply: quote.max_supply,
        circulatingSupply: quote.circulating_supply,
        price: quote.price_usd,
        marketCap: quote.market_cap_usd,
        marketCapDominance: quote.market_cap_dominance,
        percentChange24h: quote.percent_change_24h
      };
    });

    return quotes;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.toString());
  }
}

export async function getTokensCount(
  fetch: (typeof globalThis)['fetch'],
  baseUrl: string,
  params: {
    status?: 'halal' | 'haram' | 'syubhat';
    keyword?: string;
  } = {}
) {
  try {
    const url = new URL(baseUrl + '/api/tokens/count');

    if (params.status) url.searchParams.set('status', params.status);
    if (params.keyword) url.searchParams.set('keyword', params.keyword);

    const res = await fetch(url);

    if (!res.ok) throw new Error('Failed to fetch tokens count');

    const result = await res.json();

    if (result.error) throw new Error(result.message);

    return result.data as number;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.toString());
  }
}
