  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a Schema and a Model

const RoundvalueSchema = new Schema({
    round: Number
});

const GetRoundValue = module.exports = mongoose.model('roundvalue', RoundvalueSchema);

module.exports.getValue = (callback) => {
	GetRoundValue.find(callback);
}
// module.exports = GetRoundValue;

module.exports.addValue = (value, callback) => {
	GetRoundValue.create(value, callback);
}

module.exports.updateValue = (id, value, options, callback) => {
	let query = {_id: id};
	let update = {
		round: value.round
	}
	GetRoundValue.findOneAndUpdate(query, update, options, callback);
}