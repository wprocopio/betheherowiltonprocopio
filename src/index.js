
const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

var corsOptions = {
  origin: 'https://serene-hugle-efa406.netlify.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));


app.use(express.json());
app.use(routes);



const PORT = process.env.PORT;


app.listen(PORT);