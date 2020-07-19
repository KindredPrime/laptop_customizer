import React, { Component } from 'react';

export default class CartItem extends Component {
    render() {
        return (
            <div className="CartItem">
                <h3 className="CartItem__Feature">{this.props.feature}</h3>
                <p className="CartItem__Cost">{this.props.cost}</p>
                <p className="CartItem__Name">{this.props.name}</p>
            </div>
        );
    }
}