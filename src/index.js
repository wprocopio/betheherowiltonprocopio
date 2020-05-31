
const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}




app.use(express.json());
app.use(routes);



const PORT = process.env.PORT;


app.listen(PORT);