const mongoose = require('../../database/index');

const UsuarioPontosSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  controle_pontos: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ControlePontos'
  },
  pontos: {
    type: Number,
    require: true
  },
  partidas_jogadas: {
    type: Number,
    require: true
  },
  primeiro: {
    type: Number,
    require: true
  },
  segundo: {
    type: Number,
    require: true
  },
  terceiro: {
    type: Number,
    require: true
  },
  ultimo: {
    type: Number,
    require: true
  }
});

const UsuarioPontos = mongoose.model('UsuarioPontos', UsuarioPontosSchema);
module.exports = UsuarioPontos;
