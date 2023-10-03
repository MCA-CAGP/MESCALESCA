const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;
const API_URL = 'https://api.deepl.com/v2/translate';
const API_KEY = '4c4d8eb2-c025-32b0-be23-4115c0058073:fx';

app.use(bodyParser.json());

app.post('/translate', async (req, res) => {
    const data = {
        text: req.body.text,
        source_lang: req.body.source_lang,
        target_lang: req.body.target_lang,
        auth_key: API_KEY
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        const result = await response.json();
        res.json(result);

    } catch (error) {
        console.error('Error fetching from DeepL:', error);
        res.status(500).json({ error: 'Failed to fetch from DeepL API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
