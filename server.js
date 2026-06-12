require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB conectado");
});

app.use(
  "/agendamentos",
  require("./routes/agendamentoRoutes")
);

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando");
});