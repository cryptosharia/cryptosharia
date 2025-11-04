import supabase from '../../supabase';

export const GET = async ({ url }) => {
  try {
    const category = url.searchParams.get('category');

    // Use head to prevent post data from being fetched (Only count will be fetched)
    let query = supabase.from('posts').select('*', { count: 'exact', head: true });

    // Filter by category
    if (category) {
      query = query.eq('category', category);
    }

    const { data: _, error, count } = await query;

    if (error) throw new Error(error.message);

    return new Response(
      JSON.stringify({
        error: false,
        message: 'Fetching posts count success',
        data: count
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

    return new Response(
      JSON.stringify({
        error: true,
        message: error.toString()
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
