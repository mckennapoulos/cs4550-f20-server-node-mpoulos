let questions = require('./questions.json')

findAllQuestions = () => questions

findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

module.exports = {
    findAllQuestions,
    findQuestionsForQuiz
}
