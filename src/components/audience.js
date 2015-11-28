import React from 'react';
import Display from './parts/display';

var Audience = React.createClass({
    render() {
        return (
            <div>
                <Display if={this.props.status === 'connected'}>
                    <h1>Join the session</h1>
                </Display>
            </div>
        );
    }
});

module.exports = Audience;
