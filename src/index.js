const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World'));

/* eslint-disable-next-line */
app.listen(port, () => console.info(`Trivia API is listening on localhost ${port}! Hit http://localhost:${3000} to see what's up!`));
