const quizModel = require('../models/quizzes/quizzes.models.server')
const findAllQuizzes = () => quizModel.find()
const findQuizById = (quizId) => quizModel.findById(quizId)
module.exports = { findAllQuizzes, findQuizById }