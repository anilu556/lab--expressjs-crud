require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const api = require('./src/routes/api');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hello root')
})

app.use('/api', (req, res) => {
    res.send('Endpoint /api OK')
})

app.use((req, res) => {
    const ERROR = {message: '404. Not Found'};

    res.status(404).json(ERROR);
});

app.use((req, res) => {
    const ERROR = {message: '500. Server Error'};

    res.status(500).json(ERROR);
});

app.listen(PORT, () => {
    const msg = chalk.blue(`Node Server is running on PORT: ${PORT}`);

    console.log(msg);
})