var React = require('react');
import {Router, Route, Link} from 'react-router';

var Error404 = React.createClass({
    render(){
        return (
            <div>
                <h1>Whoops...</h1>
                <p>We cannot find the page.</p>
                <p>
                    <Link to="/">Join as Audience</Link>
                </p>
                <p>
                    <Link to="/speaker">Start the presentation</Link>
                </p>
                <p>
                    <Link to="/board">View the board</Link>
                </p>
            </div>
        );
    }
});

module.exports = Error404;
