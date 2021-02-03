import express from 'express';
import { studentModel } from '../models/studentModels.js';

const app = express();

// CREATE
app.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// RETRIVE
app.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({});
    res.status(200).send(student);
  } catch (err) {
    res.status(500).send(error);
  }
});

// UPDATE
app.patch('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    
    const student = await studentModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// DELETE
app.delete('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id: id });
    if(!student){
      res.status(404).send({"message": "Erro ao emcontrar o aluno"})
    }else{
        res.status(200).send({"message": "Estudante deletado com sucesso"});
    }
    
  
  } catch (err) {
    res.status(500).send(error);
  }
});
// PUT
app.put('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndDelete({ _id: id });
    if(!student){
      res.status(404).send({"message": "Erro ao emcontrar o aluno"})
    }else{
        res.status(200).send({"message": "Estudante deletado com sucesso"});
    }
    
  
  } catch (err) {
    res.status(500).send(error);
  }
});

export { app as studentRouter };
