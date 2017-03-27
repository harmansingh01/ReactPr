import * as React from "react";
import GreeterMessage from "./GreeterMessage";
import GreeterForm from "./GreeterForm";
let print = true;

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
