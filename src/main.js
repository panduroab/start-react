var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var DefaultRoute = Router.DefaultRoute;
import { IndexRoute } from 'react-router';
var App = require('./components/app');
var Audience = require('./components/audience');
var Speaker = require('./components/speaker');
var Board = require('./components/board');
var Error404 = require('./components/error404');

var routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Audience} />
        <Route name="speaker" path="speaker" component={Speaker}></Route>
        <Route name="board" path="board" component={Board}></Route>
        <Route path="*" component={Error404}></Route>
    </Route>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('react-container'));
