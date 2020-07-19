import React, { Component } from 'react';
import FeatureOption from "../FeatureOption/FeatureOption";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class Feature extends Component {
    static defaultProps = {
        options: []
    };

    render() {
        const { feature, options, selectedOption, handleUpdate } = this.props;

        return (
            <fieldset className="feature">
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options.map(item => {
                    const itemHash = slugify(JSON.stringify(item));

                    return (
                        <FeatureOption 
                            key={itemHash}
                            id={itemHash}
                            name={item.name}
                            cost={USCurrencyFormat.format(item.cost)}
                            feature={slugify(feature)}
                            selected={item.name === selectedOption.name}
                            handleUpdate={handleUpdate}
                        />
                    );
                })}
            </fieldset>
        );
    }
}