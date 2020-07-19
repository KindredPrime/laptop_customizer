import React, { Component } from 'react';
import './FeatureOption.css';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export default class FeatureOption extends Component {
    static defaultProps ={
        feature: "",
        currencyFormat: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    };

    render() {
        const { id, name, cost, feature, selected, handleUpdate, currencyFormat } = this.props;

        return (
            <div className="feature__item">
                <input
                    type="radio"
                    id={id}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={selected}
                    onChange={(e) => handleUpdate(feature, {name, cost})}
                />
                <label htmlFor={id} className="feature__label">
                    {name} ({currencyFormat.format(cost)})
                </label>
            </div>
        );
    }
}