import express from 'express';
import Widget from './models/widget';
import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import 'reflect-metadata';

const app = express();
const port = process.env.LISTEN_PORT || 3000;

const dbConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'username',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'api',
    entities: [Widget],
    synchronize: true
};

let dbConn: Connection;

createConnection(dbConfig).then(newDbConn => {
    dbConn = newDbConn;
});

app.get('/', async (req, res) => {
    res.status(200).send();
});

const server = app.listen(port);