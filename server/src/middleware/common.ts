import { Router } from 'express';
import cors from 'cors';

// CORS middleware
export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));
