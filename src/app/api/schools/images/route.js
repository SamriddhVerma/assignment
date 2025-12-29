import fs from 'fs';

export function GET(req) {
	const url = req.nextUrl;
	const searchParams = url.searchParams;
	const imageName = searchParams.get('name');

	try {
		var file = fs.readFileSync(`public/schoolImages/${imageName}`);
	} catch (err) {
		return new Response(null, { status: 404 });
	}

	return new Response(file);
}
