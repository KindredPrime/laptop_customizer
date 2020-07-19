import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';

describe("CartItem Component", () => {
    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<CartItem />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});