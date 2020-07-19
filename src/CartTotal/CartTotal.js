import React, { Component } from 'react';
import './CartTotal.css';

export default class CartTotal extends Component {
    static defaultProps = {
        currencyFormat: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    };

    render() {
        const { total, currencyFormat } = this.props;

        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {currencyFormat.format(total)}
                </div>
            </div>
        );
    }
}