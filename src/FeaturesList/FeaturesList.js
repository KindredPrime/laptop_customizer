import React, { Component } from 'react';
import Feature from '../Feature/Feature';

export default class FeaturesList extends Component {
    static defaultProps ={
        features: {}
    };

    render() {
        const { features } = this.props;
        const featureKeys = Object.keys(features);
        return (
            <div className="FeaturesList">
                <h2>Customize your laptop</h2>
                {featureKeys.map((featureKey, index) => (
                    <Feature 
                        key={feature+index}
                        feature={featureKey}
                        featureOptions={features[featureKey]}
                    />
                ))}
            </div>
        );
    }
}