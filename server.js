const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

const api = require('./routes/api');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req, res) => {
    res.json({message: 'Envalid end point'});
});

app.listen(port, () => {
    console.log('Express server is running on port: ' + port);
});