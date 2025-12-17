import type { PageLoad } from './$types';
import { getTokens } from '$lib/services/token-service';
import { getTokensCount } from '$lib/services/token-service';
import { countPaginationRange } from '$lib/utils';

export const load: PageLoad = async ({ url, fetch }) => {
  try {
    const search = url.searchParams.get('search') || undefined;
    const page = parseInt(url.searchParams.get('page') || '1');
    const tokensCountPerPage = 25;

    const tokensCountAsync = getTokensCount(fetch, url.origin, {
      status: 'syubhat',
      keyword: search
    });

    const tokensAsync = getTokens(fetch, url.origin, {
      range: countPaginationRange(page, tokensCountPerPage),
      keyword: search,
      status: 'syubhat'
    });

    return {
      tokens: await tokensAsync,
      pagesCount: Math.ceil((await tokensCountAsync) / tokensCountPerPage || 1)
    };
  } catch (error: any) {
    console.error(error);
    return {
      tokens: [],
      pagesCount: 0
    };
  }
};
