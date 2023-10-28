import { Router } from 'express';
import {
  getAllQuestions,
  postNewQuestion,
  getQuestionDetail,
  updateVote
} from '../controllers/polls.js';

const router = Router();

router.get('/', getAllQuestions);
router.post('/', postNewQuestion);
router.get('/:id', getQuestionDetail);
router.put('/vote/:id', updateVote);

export default router;
