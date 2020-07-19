import React, { Component } from 'react';
import Feature from '../Feature/Feature';

export default class FeaturesList extends Component {
    static defaultProps ={
        features: {}
    };

    render() {
        const { features, selected, handleUpdate, currencyFormat } = this.props;

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {Object.keys(features).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    const options = features[feature];

                    return (
                    <Feature 
                        key={featureHash}
                        feature={feature}
                        options={options}
                        selectedOption={selected[feature]}
                        currencyFormat={currencyFormat}
                        handleUpdate={handleUpdate}
                    />
                    );
                })}
            </form>
        );
    }
}