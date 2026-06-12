const mongoose = require("mongoose");

const AgendamentoSchema = new mongoose.Schema({
  cliente: {
    type: String,
    required: true
  },
  pet: {
    type: String,
    required: true
  },
  servico: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  horario: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Agendado"
  }
});

module.exports = mongoose.model(
  "Agendamento",
  AgendamentoSchema
);