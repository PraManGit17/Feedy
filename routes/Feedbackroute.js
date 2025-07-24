

import express from 'express';
import { feedback } from '../controllers/FeedBackController.js';

const router = express.Router();

router.get('/', feedback);

export default router;
