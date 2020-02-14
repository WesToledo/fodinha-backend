const mongoose = require('../../database/index');

const ControlePontosSchema = new mongoose.Schema({
  usuarios_pontos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UsuarioPontos'
    }
  ]
});

const ControlePontos = mongoose.model('ControlePontos', ControlePontosSchema);
module.exports = ControlePontos;
