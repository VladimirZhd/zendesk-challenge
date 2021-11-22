import express from 'express';
import fetch from 'node-fetch';
import config from 'config';

// Create router for the proxy server
const router = express.Router();
// Get API token from process environments or from a config file
const token = process.env.token || config.get('token');
// Get root url for the api
const rootURL = process.env.rootURL || config.get('rootURL');

// Get list of tickets
router.get('/tickets', async (req, res) => {
    try {
        const response = await fetch(`${rootURL}/api/v2/tickets?page=2&per_page=25`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.json(error);
    }
});

// Get a single ticket
router.get('/tickets/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await fetch(`${rootURL}/api/v2/tickets/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
})



export default router;
