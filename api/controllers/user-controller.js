const Exam = require('../models/examModel');
const mongoose = require('mongoose');

// Get all exams.
const getAllExams = async(req, res) => {
  const exams = await Exam.find( { }).sort({ creatatedAt: -1})
  res.status(200).json(exams)
}

// Get one exam.
const getOneExam = async (req, res) => {
  const {id} = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'cannot find this exam.'})
  }

  const exam = await Exam.findById(id)

  if (!exam) {
    return res.status(404).json({error: 'This exam does not existe!'})
  }

  res.status(200).json(exam)
}

// Create new exam.
const createOneExam = async (req, res) => {
  const {exam_id, key_finding, bmi, image_url} = req.body

  // Add record (exam) to database.
  try {
    const exam = await Exam.create({exam_id, key_finding, bmi, image_url}) // with exam.create() exam being the model.
    res.status(200).json(exam)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

// Delete an exam.

const deleteOneExam = async (req, res) => {
  const {id} = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({error: 'cannot find this exam.'})
  }
  const exam = await Exam.findOneAndDelete({ _id: id })

  if (!exam) {
    return res.status(404).json({error: 'This exam does not existe!'})
  }

  res.status(200).json(exam)

}

// Updsate an exam.

const updateOneExam = async (req, res) => {
  const {id} = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'cannot find this exam.'})
  }
  const exam = await Exam.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!exam) {
    return res.status(404).json({error: 'This exam does not existe!'})
  }

  res.status(200).json(exam)
}


module.exports = {
  getAllExams,
  getOneExam,
  createOneExam,
  deleteOneExam,
  updateOneExam
}