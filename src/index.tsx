import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import css from milligram
import '../node_modules/milligram/dist/milligram.css';

// Import the main html file
import './index.html';

import { App } from './App';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);