import React from 'react';

var Board = React.createClass({
    render() {
        return (<h1>Board: {this.props.owner}</h1>);
    }
});

module.exports = Board;
