var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/header');
var Router = require('react-router');
//var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    //Stablish the Initial state for the component
    getInitialState(){
        return {
            status: 'disconnected',
            title: '',
            owner: 'Panduro'
        }
    },
    //Fires before mount the App component
    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect);
        this.socket.on('disconnect', this.disconnect);
        this.socket.on('welcome', this.welcome)
    },
    connect(){
        this.setState({status: 'connected'});
    },
    disconnect(){
        this.setState({status: 'disconnected'});
    },
    //Get the state emmited by the server on the welcome
    welcome(serverState){
        //Set the State that comes from the server
        this.setState({title: serverState.title});
    },
    render(){
        console.log("Props: ", this.state.status, this.state.title);
        //Render the title state in the Header component
        return (
            <div>
                <Header title={this.state.title} />
                <div>
                    {React.cloneElement(this.props.children, this.state)}
                </div>
            </div>
        );
    }
});

module.exports = App;
