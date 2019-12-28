const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// Set constants
const config = {
	name: 'node-express-hello-world',
	port: 9000,
	host: '0.0.0.0',
};


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.status(200).send('Hello world, this page has been edited');
});

app.listen(config.port, config.host);

console.log(`Running on http://${config.host}:${config.port}`);
