import * as React from 'react';
import * as _ from 'underscore';

import './CanvasMap.css';

export interface Props {
    elementId?: string;
    width?: number;
    height?: number;
    tiles?: Array<object>;
}

function Hello({
                   elementId = 'main_canvas_map',
                   width = 500,
                   height = 500,
                   tiles = []
               }: Props) {
    if (!elementId && elementId.length < 1) {
        throw new Error(`Element ID supplied is invalid, a string expected, instead got ${elementId}`);
    }

    if (!width || !_.isNumber(width)) {
        throw new Error(`Width not set properly, a number is expected, instead got ${width}`);
    }

    if (!height || !_.isNumber(height)) {
        throw new Error(`Height not set properly, a number is expected, instead got ${height}`);
    }

    return (
        <div className="CanvasMap">
            <canvas height={height} width={width} id={elementId}/>
        </div>

    );

}

export default Hello;