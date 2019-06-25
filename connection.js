const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3005;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

Round = require('./models/getroundvalue');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://mo1289_endriu17:1Qwer432@mongo36.mydevil.net/mo1289_endriu17',
  { useNewUrlParser: true }
);

let db = mongoose.connection;
let rps = db.collection('rps');

app.get('/', (req, res) => {
  res.send('Please use /api/roundvalue');
});

app.get('/api/roundvalue', (req, res) => {
  Round.getValue((err, round) => {
    if (err) {
      throw err;
    }
    console.log('Connection with /api/roundvalue');
    res.json(round);
  });
});

app.post('/api/roundvalue', (req, res) => {
	var value = req.body;
	Round.addValue(value, (err, value) => {
		if(err){
			throw err;
        }
        console.log('Connection with /api/roundvalue post');
		res.json(value);
	});
});

app.put('/api/roundvalue/:_id', (req, res) => {
	var id = req.params._id;
	var value = req.body;
	Round.updateValue(id, value, {}, (err, value) => {
		if(err){
			throw err;
        }
        console.log('Connection with /api/roundvalue update');
		res.json(value);
	});
});

db.once('open', function() {
  console.log('Connection with database has been made');
}).on('error', function(error) {
  console.log('Connection error:', error);
});

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
