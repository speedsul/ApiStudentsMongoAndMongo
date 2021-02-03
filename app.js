import express from 'express';
import mongoose from 'mongoose'
import env from 'dotenv'
import { studentRouter } from './routes/studentRouter.js';
const {URI_MONGO,PORT} = env.config().parsed;
const port = PORT |'3000';
(async () => {
  try{
 await mongoose.connect(URI_MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  })
 console.log("Conectado ao mongo com sucesso")
  }catch(error) {
    console.log("erro ao se conectar ao mongoDB", error)
  }
})();
const app = express();
app.use(express.json());
app.use(studentRouter);
app.listen(port, () => console.log(`Api Iniciada: http://localhost:${port}`));
