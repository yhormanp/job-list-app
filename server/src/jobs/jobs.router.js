import { Router } from 'express'
import { catchErrors } from '../utils/errorHandler';
import getJobs from './jobs.controller'


const router = Router();

router.post('/', catchErrors(getJobs));

export default router;