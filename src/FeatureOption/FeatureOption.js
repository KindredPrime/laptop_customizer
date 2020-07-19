import React, { Component } from 'react';

export default class FeatureOption extends Component {
    render() {
        const { id, name, cost, feature, selected, handleUpdate } = this.props;

        return (
            <div className="feature__item">
                <input
                    type="radio"
                    id={id}
                    className="feature__option"
                    name={feature}
                    checked={selected}
                    onChange={(e) => handleUpdate(feature, {name, cost})}
                />
                <label htmlFor={id} className="feature__label">
                    {name} ({cost})
                </label>
            </div>
        );
    }
}