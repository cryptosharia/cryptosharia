import supabase from '../../supabase';

export const GET = async ({ url }) => {
  try {
    const status = url.searchParams.get('status');

    // Use head to prevent token data from being fetched (Only count will be fetched)
    let query = supabase.from('tokens').select('*', { count: 'exact', head: true });

    // Filter by status
    if (status) {
      query = query.eq('status', status);
    }

    const { data: _, error, count } = await query;

    if (error) throw new Error(error.message);

    return new Response(
      JSON.stringify({
        error: false,
        message: 'Fetching tokens count success',
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
