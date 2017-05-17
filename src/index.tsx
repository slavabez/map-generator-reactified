import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import CanvasMap from './canvas_map/CanvasMap';
import './index.css';

ReactDOM.render(
    <App>
        <CanvasMap/>
    </App>,
    document.getElementById('root') as HTMLElement
);
