const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  athlete: { type: mongoose.Schema.Types.ObjectId, ref: 'Athlete', required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  performance: { type: Number, required: true }
});

module.exports = mongoose.model('Result', resultSchema);
