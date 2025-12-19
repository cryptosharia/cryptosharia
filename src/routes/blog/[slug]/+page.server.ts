import type { PageServerLoad } from './$types';
import { getPosts } from '$lib/services/post-service';

export const load: PageServerLoad = async ({ url, params, fetch }) => {
  // Can't use Promise.all here because we need the category of the post first
  const post = (await getPosts(fetch, url.origin, { slug: params.slug, includeContent: true }))[0];
  const posts = await getPosts(fetch, url.origin, {
    category: post.category,
    skip: [post.slug],
    range: [1, 3]
  });

  return {
    post,
    posts
  };
};
