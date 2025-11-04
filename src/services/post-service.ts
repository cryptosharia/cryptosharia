import type { Post } from '../models';

async function mapRowToModel(post: any, includeContent?: boolean): Promise<Post> {
  let content = '';

  if (includeContent) content = await (await fetch(post.content_url)).text();

  return {
    slug: post.slug,
    category: post.category,
    date: new Date(post.date),
    tags: post.tags,
    title: post.title,
    description: post.description,
    thumbnailUrl: post.thumbnail_url,
    content: content
  };
}

export async function getPosts(
  fetch: (typeof globalThis)['fetch'],
  baseUrl: string,
  params: {
    slug?: string;
    keyword?: string;
    category?: 'activity' | 'article';
    skip?: string[];
    range?: [number, number];
    includeContent?: boolean;
  } = {}
) {
  try {
    const url = new URL(baseUrl + '/api/posts');

    if (params.slug) url.searchParams.set('slug', params.slug);
    if (params.keyword) url.searchParams.set('keyword', params.keyword);
    if (params.category) url.searchParams.set('category', params.category);
    if (params.skip && params.skip.length > 0) url.searchParams.set('skip', params.skip.join(','));
    if (params.range && params.range.length === 2) {
      const [from, to] = params.range;
      url.searchParams.set('range', `${from},${to}`);
    }

    const res = await fetch(url);

    if (!res.ok) throw new Error('Failed to fetch posts');

    const result = await res.json();

    if (result.error) throw new Error(result.message);

    let posts: Post[] = result.data.map(
      async (post: any) => await mapRowToModel(post, params.includeContent)
    );

    // Since the posts are fetched asynchronously,
    // meaning that the posts will be an array of promises,
    // so we need to wait for all the promises to resolve
    return await Promise.all(posts);
  } catch (error: any) {
    console.error(error);
    throw new Error(error.toString());
  }
}

export async function getPostsCount(
  fetch: (typeof globalThis)['fetch'],
  baseUrl: string,
  params: {
    category?: 'activity' | 'article';
  } = {}
) {
  try {
    const url = new URL(baseUrl + '/api/posts/count');

    if (params.category) url.searchParams.set('category', params.category);

    const res = await fetch(url);

    if (!res.ok) throw new Error('Failed to fetch posts count');

    const result = await res.json();

    if (result.error) throw new Error(result.message);

    return result.data as number;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.toString());
  }
}
