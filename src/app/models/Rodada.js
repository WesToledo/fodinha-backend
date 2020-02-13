const mongoose = require('../../database/index');

const RodadaSchema = new mongoose.Schema({
  index: {
    type: Number,
    require: true
  },
  jogadores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario'
    }
  ],
  sairam: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario'
    }
  ]
});
