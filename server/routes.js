import { Router } from 'express';
import dotenv from 'dotenv';
import { askControl } from './backend/claudeController.js';

dotenv.config();  

const router = Router();
router.post('/parse-emotion', askControl);

export default router;