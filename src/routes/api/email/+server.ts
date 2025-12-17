import { GS_CONTACT_FORM_ENDPOINT } from '$env/static/private';

export const POST = async ({ request }) => {
  const { name, email, message } = await request.json();

  try {
    const res = await fetch(GS_CONTACT_FORM_ENDPOINT, {
      redirect: 'follow', // to solve CORS issue
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8' // to solve CORS issue
      },
      body: JSON.stringify({ name, email, message })
    });

    if (!res.ok) {
      throw new Error(`Sending email failed: ${res.statusText}`);
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: data.success, message: data.message, data: data.data }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    console.error(error);

    const message = error instanceof Error ? error.message : error.toString();

    return new Response(JSON.stringify({ success: false, message, data: null }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
