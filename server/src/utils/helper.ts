import { Router } from 'express';

type Wrapper = ((router: Router) => void);

// Middleware for routes
export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

