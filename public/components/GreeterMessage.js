import * as React from "react";
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

export default GreeterMessage;