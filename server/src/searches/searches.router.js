import { Router } from 'express'
import { catchErrors } from '../utils/errorHandler';
import getSearches from './searches.controller';


const router = Router();

router.get('/all', catchErrors(getSearches));

export default router;