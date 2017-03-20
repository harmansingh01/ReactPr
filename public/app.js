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

    getInitialState:function(){
        if (print) {
            console.log('getDefaultState');
        }
        return{
          name:this.props.name
        };
    },
    componentDidMount: function () {
        if (print) {
            console.log('ComponentDidMount');
        }
    },


    onButtonClick: function (e) {
        e.preventDefault();
        var nameRef=this.refs.name;
        const name = nameRef.value;
        nameRef.value='';

        if(typeof(name==='string')&&name.length>0) {
            this.setState({name: name});
        }
    },

    render: function () {
        return (<div>
                <h1>Hello from {this.state.name}</h1>
                <p>{this.props.message + '!!'}'</p>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button type="submit">Set Name</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <Greeter name="Preet"/>
    , document.getElementById('app'));