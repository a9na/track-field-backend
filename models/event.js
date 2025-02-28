const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  results: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Result' }]
});

module.exports = mongoose.model('Event', eventSchema);
