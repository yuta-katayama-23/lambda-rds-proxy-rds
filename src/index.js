import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line import/prefer-default-export, no-unused-vars
export const handler = async (event) => {
	const connection = await mysql.createConnection({
		host: process.env.HOST,
		port: 3306,
		user: process.env.USER_NAME,
		password: process.env.PASSWORD,
		database: 'mydb',
		ssl: {
			ca: fs.readFileSync(path.join(__dirname, 'AmazonRootCA1.pem'))
		}
	});

	const [rows] = await connection.execute('SELECT * FROM `users`', []);

	await connection.end();

	const response = {
		statusCode: 200,
		body: rows
	};
	return response;
};
