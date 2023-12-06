import { lazy } from 'react';

export const LoginFormAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./LoginForm'));
    }, 2000);
}));
