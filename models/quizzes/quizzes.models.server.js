const mongoose = require('mongoose')
const quizzesSchema = require('./quizzes.schema.server')
const quizModel = mongoose.model(
    'QuizModel',
    quizzesSchema
)
module.exports = quizModel