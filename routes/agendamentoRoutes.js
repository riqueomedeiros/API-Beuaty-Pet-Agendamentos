const express = require("express");
const router = express.Router();

const Agendamento = require("../models/Agendamento");

router.post("/", async (req, res) => {
  const agendamento = await Agendamento.create(req.body);
  res.status(201).json(agendamento);
});

router.get("/", async (req, res) => {
  const agendamentos = await Agendamento.find();
  res.json(agendamentos);
});

router.get("/:id", async (req, res) => {
  const agendamento = await Agendamento.findById(req.params.id);
  res.json(agendamento);
});

router.put("/:id", async (req, res) => {
  const agendamento = await Agendamento.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(agendamento);
});

router.delete("/:id", async (req, res) => {
  await Agendamento.findByIdAndDelete(req.params.id);

  res.json({
    mensagem: "Agendamento removido"
  });
});

module.exports = router;