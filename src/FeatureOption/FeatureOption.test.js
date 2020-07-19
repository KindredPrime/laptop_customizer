import React from 'react';
import ReactDOM from 'react-dom';
import FeatureOption from './FeatureOption';

describe("FeatureOption Component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<FeatureOption />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});