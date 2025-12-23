import type { PageServerLoad } from './$types';

function delay(s: number) {
	return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

async function loadPost(slug: string) {
	await delay(2);
	return {
		title: `Post ${slug}`,
		content: `Description for post ${slug}`
	};
}

async function loadComments(slug: string) {
	await delay(8);
	return [`Comment ${slug} 1`, `Comment ${slug} 2`, `Comment ${slug} 3`];
}

export const load: PageServerLoad = async ({ params }) => {
	return {
		// make sure the `await` happens at the end, otherwise we
		// can't start loading comments until we've loaded the post
		comments: loadComments(params.slug),
		post: await loadPost(params.slug)
	};
};
