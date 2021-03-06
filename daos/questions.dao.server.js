const questionsModel = require('../models/questions/questions.models.server')
const quizModel = require('../models/quizzes/quizzes.models.server')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => quizModel.findById(qzid)
    .populate('questions').then(quiz => quiz.questions)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }