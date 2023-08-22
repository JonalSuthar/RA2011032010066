const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());

const dataPath = './data.json';

app.get('/train', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            res.status(500).json({ error: 'Data not available' });
        } else {
            const trainData = JSON.parse(data);
            res.json(trainData);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
