import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
import CartTotal from '../CartTotal/CartTotal';
import './Cart.css';

export default class Cart extends Component {
    static defaultProps = {
        selected: {}
    };

    renderCartItems(selected, currencyFormat) {
        return Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + "-" + idx;
            const selectedOption = selected[feature];

            return (
                <CartItem 
                    key={featureHash}
                    feature={feature}
                    cost={selectedOption.cost}
                    name={selectedOption.name}
                    currencyFormat={currencyFormat}
                />
            );
        })
    }

    calculateCartTotal(selected) {
        return Object.keys(selected).reduce((acc, curr) => acc + selected[curr].cost, 0);
    }

    render() {
        const { selected, currencyFormat } = this.props;
        
        const cartTotal = this.calculateCartTotal(selected);

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {this.renderCartItems(selected, currencyFormat)}
                <CartTotal total={cartTotal} currencyFormat={currencyFormat} />
            </section>

        );
    }
}