import * as React from 'react';
import * as enzyme from 'enzyme';
import CanvasMap from './CanvasMap';


it('renders the canvas correctly with no props passed', () => {
    const canvasMap = enzyme.shallow(<CanvasMap/>);
    expect(canvasMap.find('.CanvasMap')).toHaveLength(1);
});

it('renders the canvas correctly with only element ID prop passed', () => {
    const canvasMap = enzyme.shallow(<CanvasMap elementId="some_id" />);
    expect(canvasMap.find('.CanvasMap')).toHaveLength(1);
});

it('throws error with explicitly empty element id passed', () => {
    expect(() => {
        enzyme.shallow(<CanvasMap elementId={''}/>);
    }).toThrow();
});

it('throws error with explicitly zero width passed', () => {
    expect(() => {
        enzyme.shallow(<CanvasMap width={0}/>);
    }).toThrow();
});

it('throws error with explicitly zero height passed', () => {
    expect(() => {
        enzyme.shallow(<CanvasMap width={0}/>);
    }).toThrow();
});