/*!
 * express
 * MIT Licensed
 */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// Enable CORS for all routes
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.use( '/api', require('./routes/controllers'), (req,res ) => {
  res.send('Hey this is my API running 🥳 -> /api');
});

// Export the Express API
module.exports = app;