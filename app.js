const express = require('express');
const app = express();
const path = require('path');
const port = 3005;

//Static file declaration
app.use(express.static(path.join(__dirname, '/build')));

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})
