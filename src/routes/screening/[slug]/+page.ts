import type { PageLoad } from './$types';
import { getTokens } from '../../../services/token-service';

export const load: PageLoad = async ({ url, fetch, params }) => {
  const [token, tokens] = await Promise.all([
    getTokens(fetch, url.origin, { slug: params.slug, includeContent: true }).then(
      (tokens) => tokens[0]
    ),
    getTokens(fetch, url.origin, { skip: [params.slug], range: [1, 10] })
  ]);

  return {
    token,
    tokens
  };
};
