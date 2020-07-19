import React, { Component } from 'react';
import './CartItem.css';

export default class CartItem extends Component {
    static defaultProps = {
        currencyFormat: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    };

    render() {
        const { feature, cost, name, currencyFormat } = this.props;

        return (
            <div className="summary__option">
                <div className="summary__option__label">{feature}</div>
                <div className="summary__option__value">{name}</div>
                <div className="summary__option__cost">
                    {currencyFormat.format(cost)}
                </div>
            </div>
        );
    }
}