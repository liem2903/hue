import { Router } from 'express';
import dotenv from 'dotenv';
import { askControl } from './backend/claudeController';

dotenv.config();  

const router = Router();
router.post('/ask', askControl);

export default router;