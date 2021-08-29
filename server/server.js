import express from 'express';
import data from './db.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data)
})

app.get('/', (req, res) => {
    res.send('server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});