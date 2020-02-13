const mongoose = require('../../database/index');

const UsuarioPontosSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  pontos: {
    type: Number,
    require: true
  },
  partidasJogadas: {
    type: Number,
    require: true
  }
});

const UsuarioPontos = mongoose.model('UsuarioPontos', UsuarioPontosSchema);
module.exports = UsuarioPontos;
