import React, { Component } from 'react';
import FeatureOption from "../FeatureOption/FeatureOption";

export default class Feature extends Component {
    static defaultProps = {
        featureOptions: []
    };

    render() {
        const { feature, featureOptions } = this.props;
        return (
            <div className="Feature">
                <h3>{feature}</h3>
                {featureOptions.map((featureOption, index) => (
                    <FeatureOption 
                        key={feature+"option"+index}
                        name={featureOption.name}
                        cost={featureOption.cost}
                    />
                ))}
            </div>
        );
    }
}