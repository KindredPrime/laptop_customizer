import React from 'react';
import ReactDOM from 'react-dom';
import FeaturesList from './FeaturesList';

describe("FeaturesList Component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<FeaturesList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});