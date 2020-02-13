const mongoose = require('../../database/index');

const ControlePontosSchema = new mongoose.Schema({
  usuarios: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});

const ControlePontos = mongoose.model('ControlePontos', ControlePontos);
module.exports = ControlePontos;
