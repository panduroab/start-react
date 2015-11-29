import React from 'react';
import Display from './parts/display';
import Join from './parts/join';

var Audience = React.createClass({
    render() {
        return (
            <div>
                <Display if={this.props.status === 'connected'}>
                    <h1>Join the session</h1>
                    <Join emit={this.props.emit} />
                </Display>
            </div>
        );
    }
});

module.exports = Audience;
