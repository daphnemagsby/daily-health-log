const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	calories: {
		type: Number,
		required: true
	},
	carbs: {
		type: Number,
		required: true
	},
	fat: {
		type: Number,
		required: true
	},
	protein: {
		type: Number,
		required: true
	},
	sugar: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});


const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;