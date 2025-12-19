import type { PageServerLoad } from './$types';
import { getPosts, getPostsCount } from '$lib/services/post-service';
import { countPaginationRange } from '$lib/utils';

export const load: PageServerLoad = async ({ url, fetch }) => {
  try {
    const search = url.searchParams.get('search') || undefined;
    const page = parseInt(url.searchParams.get('page') || '1');
    const postsCountPerPage = 12;

    const postsCountAsync = getPostsCount(fetch, url.origin, {
      keyword: search
    });

    const postsAsync = getPosts(fetch, url.origin, {
      range: countPaginationRange(page, postsCountPerPage),
      keyword: search
    });

    return {
      posts: await postsAsync,
      pagesCount: Math.ceil((await postsCountAsync) / postsCountPerPage || 1)
    };
  } catch (error: any) {
    console.error(error);
    return {
      posts: [],
      pagesCount: 0
    };
  }
};
