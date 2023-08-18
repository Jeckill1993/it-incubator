import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home page test');
});
app.get('/users', (req, res) => {
    res.send('Users');
});
app.post('/users', (req, res) => {
    res.send('User was created');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
