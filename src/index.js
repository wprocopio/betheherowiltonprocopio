
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333

app.listen(PORT)