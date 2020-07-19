import React, { Component } from 'react';

export default class FeatureOption extends Component {
    render() {
        return (
            <div className="FeatureOption">
                <p>{this.props.name} ({this.props.cost})</p>
            </div>
        );
    }
}