import * as React from "react";
let print = true;

let GreeterMessage = React.createClass({

    render: function () {
        return (
            <div>
                <h1>Hello from {this.props.name}</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
});

let GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        let updates = {};
        var name = this.refs.name;
        var message=this.refs.message;
        var nameValue = name.value;
        var messageValue=message.value;

        if (nameValue.length > 0) {
            name.value = '';
            updates.name=nameValue;
        }
        if(messageValue.length>0){
            message.value='';
            updates.message=messageValue;
        }

        this.props.onNewData(updates);
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>  <input type="text" ref="name"/> </div>
                   <div><textarea ref="message"/></div>
                    <button type="submit">Set Name</button>
                </form>
            </div>
        );
    }
});

let Greeter = React.createClass({

    getDefaultProps: function () {
        if (print) {
            console.log('getDefaultProps');
        }

        return {
            name: 'Default User',
            message: 'This is the default message'
        }
    },
    componentWillMount: function () {
        if (print) {
            console.log('ComponentWillMount');
        }
    },

    getInitialState: function () {
        if (print) {
            console.log('getDefaultState');
        }
        return {
            name: this.props.name
        };
    },
    componentDidMount: function () {
        if (print) {
            console.log('ComponentDidMount');
        }
    },


    handleDataUpdate: function (data) {
        console.log('data is', data);
        this.setState(data);
    },

    render: function () {
        return (<div>
                <GreeterMessage name={this.state.name} message={this.state.message} />
                <GreeterForm onNewData={this.handleDataUpdate}  />
            </div>
        );
    }
});


export {Greeter}
