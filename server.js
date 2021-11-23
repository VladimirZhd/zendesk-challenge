import express from 'express';
import http from 'http';
import config from 'config';
import router from './routes/routes.js'

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

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/zendesk-challenge'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/zendesk-challenge/index.html'));
});

app.use(router);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`App is running on port ${PORT}`));