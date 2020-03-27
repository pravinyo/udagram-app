import { Router, Request, Response } from 'express';
import { FilterRouter } from './imageFilter/routes/imageFilter.router';

const router: Router = Router();

router.use('/imagefilter', FilterRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;