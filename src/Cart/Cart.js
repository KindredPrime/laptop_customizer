import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
import CartTotal from '../CartTotal/CartTotal';

export default class Cart extends Component {
    static defaultProps = {
        selectedFeatureOptions: {}
    };

    renderCartItems(selectedFeatureOptions) {
        const features = Object.keys(selectedFeatureOptions);

        return features.map((feature, index) => {
            const selectedFeatureOption = selectedFeatureOptions[feature];

            return (
            <CartItem 
                key={index}
                feature
                cost={selectedFeatureOption.cost}
                name={selectedFeatureOption.name}
            />
            );
        });
    }

    calculateCartTotal(selectedFeatureOptions) {
        let total = 0;
        for(const selectedFeatureOption in selectedFeatureOptions) {
            total += selectedFeatureOption.cost;
        }
        
        return total;
    }

    render() {
        const { selectedFeatureOptions } = this.props;
        const cartItems = this.renderCartItems(selectedFeatureOptions);
        const cartTotal = this.calculateCartTotal(selectedFeatureOptions);

        return (
            <div className="Cart">
                <h2>Your cart</h2>
                {cartItems}
                <CartTotal total={cartTotal} />
            </div>
        );
    }
}