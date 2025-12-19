import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/services/post-service';
import { getTokens } from '$lib/services/token-service';

export const load: PageServerLoad = async ({ url, fetch }) => {
  const activities = await getPosts(fetch, url.origin, { category: 'activity', range: [1, 6] });
  const articles = await getPosts(fetch, url.origin, { category: 'article', range: [1, 6] });
  const tokens = await getTokens(fetch, url.origin, { range: [1, 15] });

  return {
    activities,
    articles,
    tokens
  };
};
