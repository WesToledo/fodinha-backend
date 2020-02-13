const mongoose = require('../../database/index');

const PartidaSchema = new mongoose.Schema({
  data: {
    type: Date,
    require: true
  },
  primeiro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  segundo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario'
    }
  ],
  terceiro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  ultimo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});

const Partida = mongoose.model('Partida', PartidaSchema);
module.exports = Partida;
