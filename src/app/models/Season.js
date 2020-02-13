const mongoose = require('../../database/index');

const SeasonSchema = new mongoose.Schema({
  ano: {
    type: String,
    require: true
  },
  semestre: {
    type: String,
    require: true
  }
});

const Season = mongoose.model('Season', Season);
module.exports = Season;
