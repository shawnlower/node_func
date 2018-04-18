'use strict';

const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.status(200).send('Hello Node World');
});

app.listen(3000, () => console.log("Listening on port 3000. Maybe."));
