import fs from 'fs';
import { db } from '../mysql';

export async function GET(req) {
	return db
		.query('SELECT name,address,city,image FROM schools')
		.then(([rows]) => {
			return new Response(JSON.stringify(rows), {
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			});
		});
}

export async function POST(req) {
	const sql = `
    INSERT INTO schools (name,address,city,state,contact,image,email_id)
	VALUES (?,?,?,?,?,?,?);
    `;

	const { name, address, city, state, contact, image, email_id } =
		await req.json();

	const filename = `${Date.now()}.${
		image.split(',')[0].split('/')[1].split(';')[0]
	}`;

	if (!fs.existsSync('public/schoolImages')) {
		fs.mkdirSync('public/schoolImages', { recursive: true });
	}

	fs.writeFileSync(
		`public/schoolImages/${filename}`,
		Uint8Array.from(atob(image.split(',')[1]), (c) => c.charCodeAt(0))
	);

	return db
		.query(sql, [name, address, city, state, contact, filename, email_id])
		.then(() => {
			return new Response(null, {
				status: 201,
			});
		});
}
