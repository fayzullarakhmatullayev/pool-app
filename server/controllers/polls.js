import Question from '../models/question.js';
import Choice from '../models/choice.js';

export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({
      order: [['createdAt', 'DESC']],
      limit: 5
    });
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const postNewQuestion = async (req, res) => {
  try {
    const { question_text, choices } = req.body;

    const question = await Question.create({
      question_text
    });

    // Get the question ID
    const question_id = question.id;

    // Post the choices
    const newChoices = choices.map((choice_text) => ({ question_id, choice_text }));

    await Choice.bulkCreate(newChoices);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getQuestionDetail = async (req, res) => {
  try {
    const id = Number(req.params.id || 0);
    const question = await Question.findByPk(id, {
      include: [Choice]
    });
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateVote = async (req, res) => {
  try {
    const choice_id = Number(req.params.id);

    await Choice.increment('votes', { by: 1, where: { id: choice_id } });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
};
