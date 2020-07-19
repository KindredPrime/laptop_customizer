import React from 'react';
import ReactDOM from 'react-dom';
import Feature from './Feature';

describe("Feature Component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<Feature />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});