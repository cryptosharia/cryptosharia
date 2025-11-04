import supabase from '../supabase';

export const GET = async ({ url }) => {
  try {
    const slug = url.searchParams.get('slug');
    const keyword = url.searchParams.get('keyword');
    const category = url.searchParams.get('category');
    const skip = url.searchParams.get('skip'); // e.g. "slug-a,slug-b,slug-c"
    const range = url.searchParams.get('range'); // e.g. "1,10"

    let query = supabase.from('posts').select('*');

    // Filter by slug
    if (slug) {
      query = query.eq('slug', slug);
    }

    // Filter by keyword in title or description
    if (keyword) {
      query = query.or(`title.ilike.%${keyword}%,description.ilike.%${keyword}%`);
    }

    // Filter by category
    if (category) {
      query = query.eq('category', category);
    }

    // Skip specific slugs
    if (skip) {
      const slugsToSkip = skip.split(',').map((s) => s.trim());
      query = query.not('slug', 'in', `(${slugsToSkip.join(',')})`);
    }

    // Add range for pagination
    if (range) {
      const [from, to] = range.split(',').map((s) => parseInt(s.trim()));
      query = query.range(from - 1, to - 1);
    }

    query = query.order('date', { ascending: false });

    const { data: posts, error } = await query;

    if (error) throw new Error(error.message);

    return new Response(
      JSON.stringify({
        error: false,
        message: 'Fetching posts success',
        data: posts
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error: any) {
    console.error(error);

    return new Response(JSON.stringify({ error: true, message: error.toString() }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
