const mongoose = require('../../database/index');

const SeasonSchema = new mongoose.Schema({
  ano: {
    type: String,
    require: true
  },
  semestre: {
    type: String,
    require: true
  },
  controle_pontos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ControlePontos'
  },
  partidas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Partidas'
  }
});

const Season = mongoose.model('Season', SeasonSchema);
module.exports = Season;
