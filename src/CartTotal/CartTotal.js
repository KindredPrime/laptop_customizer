import React, { Component } from 'react';

export default class CartTotal extends Component {
    render() {
        return (
            <div className="CartTotal">
                <h3>Total</h3>
                <p>{this.props.total}</p>
            </div>
        );
    }
}