import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./app/App.";
import { BrowserRouter } from "react-router-dom";
import {ThemeProvider} from "./theme/ThemeProvider";

const root = createRoot(document.getElementById('root-div'));

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
