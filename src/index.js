import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

import App from './App/App';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
