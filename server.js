import express from 'express';
import http from 'http';
import config from 'config';
import router from './routes/routes.js';
import path from 'path';

const app = express();

const PORT = process.env.PORT || config.get('PORT');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

app.use(router);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`App is running on port ${PORT}`));