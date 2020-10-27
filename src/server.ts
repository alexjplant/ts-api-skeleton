import express from 'express';

// import { createConnection, ConnectionOptions, Connection } from 'typeorm';
// import 'reflect-metadata';

const app = express();
const port = process.env.LISTEN_PORT || 3000;

// const dbConfig: ConnectionOptions = {
//     type: 'postgres',
//     host: process.env.PG_HOST || 'localhost',
//     port: Number(process.env.PG_PORT) || 5432,
//     username: process.env.PG_USERNAME || 'username',
//     password: process.env.PG_PASSWORD || 'password',
//     database: process.env.PG_DATABASE || 'phosphorus',
//     entities: [],
//     synchronize: true
// };

// createConnection(dbConfig).then(dbConn => {
    
// });

app.get('/', async (req, res) => {
    res.status(200).send();
});

app.listen(port);