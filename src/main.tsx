import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import RoutesComp from './config/RoutesComp';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <RoutesComp />
        </BrowserRouter>
    </StrictMode>,
);
